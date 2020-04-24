import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isArray, forIn, isObject } from 'lodash-es';

@Directive({
  selector: '[ngxNatLink]',
})
export class NgxNatLinkDirective {
  // tslint:disable-next-line: variable-name
  _moveCount = 0;

  @Input() link: string | (string | { [key: string]: string })[];
  @Output() linkEvent: EventEmitter<{
    target: '_blank' | '_self';
  }> = new EventEmitter();
  // tslint:disable-next-line: variable-name
  private _mouseMoved: boolean;

  @HostBinding('style.cursor') get cursor(): string {
    return 'pointer';
  }

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent): void {
    if (this._mouseMoved) {
      return;
    }
    // ctrl+click, cmd+click
    if ($event.ctrlKey || $event.metaKey) {
      $event.preventDefault();
      $event.stopPropagation();
      window.open(
        this.location.prepareExternalUrl(this.getUrl(this.link)),
        '_blank'
      );
      this.linkEvent.emit({ target: '_blank' });
    } else {
      this.router.navigate(this.getLink(this.link));
      this.linkEvent.emit({ target: '_self' });
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(): void {
    this._mouseMoved = false;
    this._moveCount = 0;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(): void {
    if (this._moveCount <= 2) {
      this._moveCount++;
    } else {
      this._mouseMoved = true;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp($event: MouseEvent): void {
    if (this._mouseMoved) {
      return;
    }
    // middleclick
    if ($event.button === 1) {
      $event.preventDefault();
      $event.stopPropagation();
      window.open(
        this.location.prepareExternalUrl(this.getUrl(this.link)),
        '_blank'
      );
      this.linkEvent.emit({ target: '_blank' });
    }
  }

  constructor(private router: Router, private location: Location) {}

  private getLink(
    link: string | (string | { [key: string]: string })[]
  ): (string | { [key: string]: string })[] {
    const array = [];

    if (!isArray(link)) {
      array.push(link);
    } else {
      (link as (string | { [key: string]: string })[]).forEach((o) =>
        array.push(o)
      );
    }

    return array;
  }

  private getUrl(
    link: string | (string | { [key: string]: string })[]
  ): string {
    let url = '';

    if (isArray(link)) {
      (link as (string | { [key: string]: string })[]).forEach(
        (value, index) => {
          if (isObject(value)) {
            url += this.getMatrixParams(value as { [key: string]: string });
          } else {
            url +=
              (index !== 0 ||
              (index === 0 && (value as string).split('')[0] !== '/')
                ? '/'
                : '') + value;
          }
        }
      );
    } else {
      url = link as string;
    }

    return url;
  }

  private getMatrixParams(obj: { [key: string]: string }): string {
    let params = '';

    forIn(obj, (v, k) => {
      params += `;${k}=${v}`;
    });

    return params;
  }
}
