import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoxShadowDirective } from './box-shadow.directive';

@NgModule({
  declarations: [BoxShadowDirective],
  imports: [CommonModule],
  exports: [BoxShadowDirective],
})
export class BoxShadowModule {}
