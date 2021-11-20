import { LogoModule } from './../logo/logo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerHeaderComponent } from './banner-header.component';

@NgModule({
  declarations: [BannerHeaderComponent],
  imports: [CommonModule, LogoModule],
  exports: [BannerHeaderComponent],
})
export class BannerHeaderModule {}
