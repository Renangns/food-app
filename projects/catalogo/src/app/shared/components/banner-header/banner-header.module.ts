import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerHeaderComponent } from './banner-header.component';
import { LogoComponent } from '../logo/logo.component';

@NgModule({
  declarations: [BannerHeaderComponent, LogoComponent],
  imports: [CommonModule],
  exports: [BannerHeaderComponent],
})
export class BannerHeaderModule {}
