import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConversorService } from '../services';
import { DataBrPipe } from '../pipes';
import { ModalContacaoComponent } from './modal-contacao.component';

describe('ModalContacaoComponent', () => {
  let component: ModalContacaoComponent;
  let fixture: ComponentFixture<ModalContacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ModalContacaoComponent,
        DataBrPipe 
      ],
      providers: [
        ConversorService
      ],
      imports:[
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
