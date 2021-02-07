import { NgModule } from '@angular/core';

import { BoxShadowDirective } from '../directives/box-shadow/box-shadow.directive';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [CardModule],
  exports: [CardModule],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule {}
