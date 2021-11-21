import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipComponent } from './chip.component';

const CHIP_TEXT = "Texto do chip";

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;
  let nativeElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show chip when text is not empty', () => {
    component.text = CHIP_TEXT;
    fixture.detectChanges();
    expect(nativeElement.querySelector('div').innerHTML).toContain(CHIP_TEXT);
  });

  it('should not show chip when text is empty', () => {
    fixture.detectChanges();
    expect(nativeElement.querySelector('div')).toBeFalsy();
  });

  it('should add ripple efect when ripple is not false', () => {
    component.text = CHIP_TEXT;
    fixture.detectChanges();
    expect(nativeElement.querySelector('.ripple')).toBeTruthy();
  });

  it('should not add ripple efect when ripple is false', () => {
    component.text = CHIP_TEXT;
    component.ripple = false;
    fixture.detectChanges();
    expect(nativeElement.querySelector('.ripple')).toBeFalsy();
  });
});
