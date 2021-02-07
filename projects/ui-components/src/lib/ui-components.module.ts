import { CardModule } from './components/card/card.module';
import { NgModule } from '@angular/core';
import { DirectivesModule } from './directives';

@NgModule({
  declarations: [],
  imports: [CardModule, DirectivesModule],
  exports: [CardModule, DirectivesModule],
})
export class UiComponentsModule {}
