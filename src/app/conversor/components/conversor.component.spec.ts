import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from '../services';
import { NumeroDirective } from '../directives';
import { DataBrPipe } from '../pipes';
import { ModalContacaoComponent } from '../utils'

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalContacaoComponent 
      ],
      providers: [
        MoedaService,
        ConversorService
      ],
      imports :[
        HttpClientModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
