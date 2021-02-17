import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  private _url = '';

  @Input() set url(value: string) {
    this._url = value;
  }

  get url(): string {
    return this._url;
  }
  constructor() {}

  ngOnInit(): void {}
}
