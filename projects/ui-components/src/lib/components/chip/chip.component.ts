import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chx-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {

  private _ripple = true;

    /**
   * @optional
   *
   * @description
   *
   * Button label
   *
   */
  @Input() text?: string;

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
