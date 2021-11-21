import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let nativeElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only start with default values', () => {
    expect(nativeElement.querySelector('.button-default')).toBeTruthy();
    expect(nativeElement.querySelector('.button-danger')).toBeFalsy();
    expect(nativeElement.querySelector('.button-primary')).toBeFalsy();
    expect(nativeElement.querySelector('.button-success')).toBeFalsy();
    expect(nativeElement.querySelector('.button-small')).toBeFalsy();
    expect(nativeElement.querySelector('.button-size')).toBeTruthy();
  });

  it('should update label text', () => {
    component.label = 'Button Label';
    fixture.detectChanges();
    expect(nativeElement.querySelector('button').innerHTML).toContain(
      'Button Label'
    );
  });

  it('should add the class button-small when small is true', () => {
    component.small = true;
    fixture.detectChanges();
    expect(nativeElement.querySelector('.button-small')).toBeTruthy();
  });

  it('should not add the class button-small when small is false', () => {
    component.small = false;
    fixture.detectChanges();
    expect(nativeElement.querySelector('.button-small')).toBeFalsy();
  });


  it('should add the class button danger when type is danger and remove button default, button primaty and button success', () => {
    component.type = 'danger';
    fixture.detectChanges();
    expect(nativeElement.querySelector('.button-danger')).toBeTruthy();
    expect(nativeElement.querySelector('.button-default')).toBeFalsy();
    expect(nativeElement.querySelector('.button-primary')).toBeFalsy();
    expect(nativeElement.querySelector('.button-success')).toBeFalsy();
  });

  it('should add the class button primary when type is danger and remove button default, button danger and button success', () => {
    component.type = 'primary';
    fixture.detectChanges();
    expect(nativeElement.querySelector('.button-danger')).toBeFalsy();
    expect(nativeElement.querySelector('.button-default')).toBeFalsy();
    expect(nativeElement.querySelector('.button-primary')).toBeTruthy();
    expect(nativeElement.querySelector('.button-success')).toBeFalsy();
  });

  it('should add the class button success when type is danger and remove button default, button danger and button primary', () => {
    component.type = 'success';
    fixture.detectChanges();
    expect(nativeElement.querySelector('.button-danger')).toBeFalsy();
    expect(nativeElement.querySelector('.button-default')).toBeFalsy();
    expect(nativeElement.querySelector('.button-primary')).toBeFalsy();
    expect(nativeElement.querySelector('.button-success')).toBeTruthy();
  });

  it('should add the class button default when type is invalid', () => {
    component.type = 'aaaa';
    fixture.detectChanges();
    expect(nativeElement.querySelector('.button-danger')).toBeFalsy();
    expect(nativeElement.querySelector('.button-default')).toBeTruthy();
    expect(nativeElement.querySelector('.button-primary')).toBeFalsy();
    expect(nativeElement.querySelector('.button-success')).toBeFalsy();
  });

  it('should disable button when desabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.disabled).toBeTruthy();
  });

  it('should not disable button when desabled is false', () => {
    component.disabled = false;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.disabled).toBeFalsy();
  });

  it('should set disable to false when desabled is undefined', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.disabled).toBeFalsy();
  });

  it('should simulate button click', fakeAsync(() => {
    spyOn(component.click, 'emit');
    component.onClick();
    expect(component.click.emit).toHaveBeenCalled();

    spyOn(component, 'onClick');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onClick).toHaveBeenCalled();
  }));

  it('should not simulate button click when is disabled', fakeAsync(() => {
    component.disabled = true;
    fixture.detectChanges();
    spyOn(component, 'onClick');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onClick).not.toHaveBeenCalled();
  }));
});
