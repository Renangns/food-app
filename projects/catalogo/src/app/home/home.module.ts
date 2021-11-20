import { LogoModule } from './../shared/components/logo/logo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from 'projects/ui-components/src/lib';

import { BannerHeaderModule } from '../shared/components/banner-header/banner-header.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    UiComponentsModule,
    BannerHeaderModule
  ],
})
export class HomeModule {}
