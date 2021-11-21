import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives';

@NgModule({
  declarations: [],
  imports: [ComponentsModule, DirectivesModule],
  exports: [ComponentsModule, DirectivesModule],
})
export class UiComponentsModule {}
