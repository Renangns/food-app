import { BrowserModule } from '@angular/platform-browser';
import { BoxShadowDirective } from './../../directives/box-shadow/box-shadow.directive';
import { DirectivesModule } from './../../directives/directves.module';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, BrowserModule],
      declarations: [CardComponent],
      providers: [BoxShadowDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive correct input shadow', () => {
    component.shadow = 'small';
    fixture.detectChanges();
    // Act
    expect(component.shadow).toBe('small');
  });

  it('should recevive null wher shadow is empty', () => {
    component.shadow = '';
    fixture.detectChanges();
    expect(component.shadow).toBeNull();
  });
});
