import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNatLinkComponent } from './ngx-nat-link.component';

describe('NgxNatLinkComponent', () => {
  let component: NgxNatLinkComponent;
  let fixture: ComponentFixture<NgxNatLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxNatLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNatLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
