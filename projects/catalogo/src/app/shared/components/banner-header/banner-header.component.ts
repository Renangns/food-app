import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-header',
  templateUrl: './banner-header.component.html',
  styleUrls: ['./banner-header.component.scss'],
})
export class BannerHeaderComponent implements OnInit {
  private _url = '';
  private _logoUrl = '';

  @Input() set url(value: string) {
    this._url = value;
  }

  get url(): string {
    return this._url;
  }

  @Input() set logoUrl(value: string) {
    this._logoUrl = value;
  }

  get logoUrl(): string {
    return this._logoUrl;
  }

  constructor() {}

  ngOnInit(): void {}
}
