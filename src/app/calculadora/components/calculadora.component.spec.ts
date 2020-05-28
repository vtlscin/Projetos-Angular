import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import {CalculadoraService} from '../services';

import { By } from '@angular/platform-browser';
import { ɵisBoundToModule__POST_R3__ } from '@angular/core';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers:[
        CalculadoraService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 4 - 2 = 2', () =>{
    let btn4 = fixture.debugElement.query(By.css('#btn4'));
    let btnSub = fixture.debugElement.query(By.css('#btnSubtracao'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn4.triggerEventHandler('click',null);
    fixture.detectChanges();

    btnSub.triggerEventHandler('click',null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click',null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click',null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('2');
  });
});
