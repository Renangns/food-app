import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

enum ShadowSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
}

@Directive({
  selector: '[chxBoxShadow]',
})
export class BoxShadowDirective implements OnInit {
  private _chxBoxShadow: string | null = '';
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
  @Input('chxBoxShadow') set chxBoxShadow(value: string | null) {
    this._chxBoxShadow = value && typeof value === 'string' ? value : null;
  }

  get chxBoxShadow(): string | null {
    return this._chxBoxShadow;
  }

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.chxBoxShadow = '';
  }

  ngOnInit(): void {
    let shadow;
    switch (this.chxBoxShadow) {
      case ShadowSize.SMALL:
        shadow = '0 1px 0 rgba(27,31,35,0.04)';
        break;
      case ShadowSize.MEDIUM:
        shadow = '0 3px 6px rgba(149,157,165,0.15)';
        break;
      case ShadowSize.LARGE:
        shadow = '0 8px 24px rgba(149,157,165,0.2)';
        break;
      case ShadowSize.XLARGE:
        shadow = '0 12px 48px rgba(149,157,165,0.3)';
        break;
      default:
        shadow = '';
        break;
    }
    if (shadow !== '') {
      this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadow);
    }
  }
}
