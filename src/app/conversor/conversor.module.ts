import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConversorComponent } from './components';
import { MoedaService } from './services';
import { ConversorService } from './services'; 
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';
import { ModalContacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorRoutingComponent } from './conversor-routing.component';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalContacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConversorRoutingModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
