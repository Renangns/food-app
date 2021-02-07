import { DirectivesModule } from './../../directives/directves.module';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, DirectivesModule],
      declarations: [CardComponent],
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

  it('should applied small shadow', () => {
    // component.shadow = 'small';
    // fixture.detectChanges();
    // // Act
    // component.ngOnInit();
    // const nativeElement = fixture.nativeElement;
    // const shadow = nativeElement.style.boxShadow;
    // console.log(nativeElement);
    // expect(shadow).toBe('rgba(27, 31, 35, 0.04) 0px 1px 0px');
  });
});
