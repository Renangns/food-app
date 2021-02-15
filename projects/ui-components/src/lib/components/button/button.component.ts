import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const BUTTON_TYPES = ['default', 'primary', 'danger', 'success'];
const BUTTON_TYPE_DEFAULT = 'default';

@Component({
  selector: 'chx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  private _disabled? = false;
  private _type? = 'default';
  private _small? = false;

  /**
   * @optional
   *
   * @description
   *
   * Button label
   *
   */
  @Input() label?: string;

  /**
   * @optional
   *
   * @description
   *
   * Disables the button preveting the user from interacting with it.
   */
  @Input('disabled') set disabled(value: boolean) {
    this._disabled = value === undefined ? false : true;
  }

  get disabled(): boolean {
    // tslint:disable-next-line: no-non-null-assertion
    return this._disabled!;
  }

  /**
   * @optional
   *
   * @description
   *
   * Sets the button style
   */
  @Input('type') set type(value: string) {
    this._type = BUTTON_TYPES.includes(value) ? value : BUTTON_TYPE_DEFAULT;
  }

  get type(): string {
    // tslint:disable-next-line: no-non-null-assertion
    return this._type!;
  }

  /**
   * @optional
   *
   * @description
   *
   * Sets the button to have a small size
   */
  @Input('small') set small(value: boolean) {
    this._small = undefined ? false : true;
  }

  get small(): boolean {
    // tslint:disable-next-line: no-non-null-assertion
    return this._small!;
  }

  /** Ação que será executada quando o usuário clicar sobre o `po-button`. */
  @Output('chx-click') click = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit(null);
  }
}
