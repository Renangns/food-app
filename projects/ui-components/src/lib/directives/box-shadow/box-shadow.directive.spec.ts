import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BoxShadowDirective } from './box-shadow.directive';

class MockElementRef extends ElementRef {}

@Component({
  template: `<input type="text" chxBoxShadow="small" />`,
})
class TestBoxShadowComponent {}

@Component({
  template: `<input type="text" chxBoxShadow="medium" />`,
})
class TestMediumBoxShadowComponent {}

@Component({
  template: `<input type="text" chxBoxShadow="large" />`,
})
class TestLargeBoxShadowComponent {}

@Component({
  template: `<input type="text" chxBoxShadow="xlarge" />`,
})
class TestExtraLargeBoxShadowComponent {}

@Component({
  template: `<input type="text" chxBoxShadow="a" />`,
})
class TesWithOutBoxShadowComponent {}

describe('BoxShadowDirective', () => {
  let directive: BoxShadowDirective;

  let component: TestBoxShadowComponent;
  let fixture: ComponentFixture<TestBoxShadowComponent>;
  let inputEl: DebugElement;

  let componentM: TestMediumBoxShadowComponent;
  let fixtureM: ComponentFixture<TestMediumBoxShadowComponent>;
  let inputElM: DebugElement;

  let componentL: TestLargeBoxShadowComponent;
  let fixtureL: ComponentFixture<TestLargeBoxShadowComponent>;
  let inputElL: DebugElement;

  let componentXL: TestExtraLargeBoxShadowComponent;
  let fixtureXL: ComponentFixture<TestExtraLargeBoxShadowComponent>;
  let inputElXL: DebugElement;

  let componentN: TesWithOutBoxShadowComponent;
  let fixtureN: ComponentFixture<TesWithOutBoxShadowComponent>;
  let inputElN: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoxShadowDirective,
        Renderer2,
        { provide: ElementRef, useClass: MockElementRef },
      ],
      declarations: [
        TestBoxShadowComponent,
        TestMediumBoxShadowComponent,
        TestLargeBoxShadowComponent,
        TestExtraLargeBoxShadowComponent,
        TesWithOutBoxShadowComponent,
        BoxShadowDirective,
      ],
    });

    directive = TestBed.inject(BoxShadowDirective);

    fixture = TestBed.createComponent(TestBoxShadowComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));

    fixtureM = TestBed.createComponent(TestMediumBoxShadowComponent);
    componentM = fixtureM.componentInstance;
    inputElM = fixtureM.debugElement.query(By.css('input'));

    fixtureL = TestBed.createComponent(TestLargeBoxShadowComponent);
    componentL = fixtureL.componentInstance;
    inputElL = fixtureL.debugElement.query(By.css('input'));

    fixtureXL = TestBed.createComponent(TestExtraLargeBoxShadowComponent);
    componentXL = fixtureXL.componentInstance;
    inputElXL = fixtureXL.debugElement.query(By.css('input'));

    fixtureN = TestBed.createComponent(TesWithOutBoxShadowComponent);
    componentN = fixtureN.componentInstance;
    inputElN = fixtureN.debugElement.query(By.css('input'));
  });

  it('should create the app', () => {
    expect(directive).toBeTruthy();
  });

  it('should applied small shadow', () => {
    fixture.detectChanges();
    const nativeElement = inputEl.nativeElement;
    const shadow = nativeElement.style.boxShadow;
    expect(shadow).toBe('rgba(27, 31, 35, 0.04) 0px 1px 0px');
  });

  it('should applied medium shadow', () => {
    fixtureM.detectChanges();
    const nativeElement = inputElM.nativeElement;
    const shadow = nativeElement.style.boxShadow;
    expect(shadow).toBe('rgba(149, 157, 165, 0.15) 0px 3px 6px');
  });

  it('should applied large shadow', () => {
    fixtureL.detectChanges();
    const nativeElement = inputElL.nativeElement;
    const shadow = nativeElement.style.boxShadow;
    expect(shadow).toBe('rgba(149, 157, 165, 0.2) 0px 8px 24px');
  });

  it('should applied extra-large shadow', () => {
    fixtureXL.detectChanges();
    const nativeElement = inputElXL.nativeElement;
    const shadow = nativeElement.style.boxShadow;
    expect(shadow).toBe('rgba(149, 157, 165, 0.3) 0px 12px 48px');
  });

  it('should not apply shadow', () => {
    fixtureN.detectChanges();
    const nativeElement = inputElN.nativeElement;
    const shadow = nativeElement.style.boxShadow;
    expect(shadow).toBe('');
  });

});
