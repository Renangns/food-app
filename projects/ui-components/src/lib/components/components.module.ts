import { NgModule } from '@angular/core';

import { ChipModule } from '.';
import { ButtonModule } from './button';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [CardModule, ButtonModule, ChipModule],
  exports: [CardModule, ButtonModule, ChipModule],
  providers: [],
  bootstrap: [],
})
export class ComponentsModule {}
