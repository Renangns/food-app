import { Component, Input, OnInit } from '@angular/core';

const COLORS = ['default', 'primary', 'danger', 'success'];
const COLORS_DEFAULT = 'default';

@Component({
  selector: 'chx-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  private _ripple = true;
  private _color = 'default';

    /**
   * @optional
   *
   * @description
   *
   * Button label
   *
   */
  @Input() text?: string;

  @Input('color') set color(value: string) {
    this._color = COLORS.includes(value) ? value : COLORS_DEFAULT;
  }

  get color(): string {
    return this._color;
  }

  @Input('ripple') set ripple(value: boolean) {
    this._ripple = value
  }

  get ripple(): boolean {
    return this._ripple;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
