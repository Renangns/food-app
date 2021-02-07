import { NgModule } from '@angular/core';

import { ButtonModule } from './components';
import { CardModule } from './components/card/card.module';
import { DirectivesModule } from './directives';

@NgModule({
  declarations: [],
  imports: [CardModule, DirectivesModule, ButtonModule],
  exports: [CardModule, DirectivesModule, ButtonModule],
})
export class UiComponentsModule {}
