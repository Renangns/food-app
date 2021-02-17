import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoModule } from '../logo/logo.module';

import { BannerHeaderComponent } from './banner-header.component';

describe('BannerHeaderComponent', () => {
  let component: BannerHeaderComponent;
  let fixture: ComponentFixture<BannerHeaderComponent>;
  let nativeElement: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerHeaderComponent],
      imports: [LogoModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHeaderComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render a img tag when url input is emmpty', () => {
    expect(nativeElement.querySelector('img')).toBeFalsy();
  });

  it('should render a img tag when url input is defined', () => {
    component.url = 'http://url.com.br';
    fixture.detectChanges();
    expect(nativeElement.querySelector('img')).toBeTruthy();
  });

  it('should not render a logo img tag when urlLogo input is emmpty', () => {
    expect(nativeElement.querySelector('.img-wrapper')).toBeFalsy();
  });

  it('should render a img tag when url input is defined', () => {
    component.logoUrl = 'http://url.com.br';
    fixture.detectChanges();
    console.log(nativeElement);
    expect(nativeElement.querySelector('.img-wrapper')).toBeTruthy();
  });
});
