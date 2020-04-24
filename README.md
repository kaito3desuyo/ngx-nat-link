# ngx-nat-link

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## What's this library

`ngx-nat-link` is a library to make various tags have the same routing behavior as the anchor tag.

For tags with this directive applied, `Ctrl + left click` or `middle click` to open a new tab.

## Usage

```
$ npm i ngx-nat-link
```

```html
<button ngxNatLink [link]="'/test2'">Move Test2</button>

<!-- or -->

<div ngxNatLink [link]="'/test2'">
  Move Test2
</div>
```
