import { NgModule } from '@angular/core';

import { ButtonModule } from './button';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [CardModule, ButtonModule],
  exports: [CardModule, ButtonModule],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule {}
