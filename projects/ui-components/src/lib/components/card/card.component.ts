import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  private _shadow: string | null = '';
  /**
   * @optional
   *
   * @description
   *
   * Exibe um box shadow sobre o elemento.
   *
   * > Opções de sobre são: small,medium,large,xlarge.
   *
   */
  @Input('shadow') set shadow(value: string | null) {
    this._shadow = value && typeof value === 'string' ? value : null;
  }

  get shadow(): string | null {
    return this._shadow;
  }

  constructor() {}
  ngOnInit(): void {}
}
