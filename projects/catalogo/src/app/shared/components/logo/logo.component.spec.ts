import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let nativeElement: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
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
});
