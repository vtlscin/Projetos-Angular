import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para os valores padrao
   * 
   * @return void
   */
  limpar():void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }


  /**
   * Adiciona o numero selecionado para o calculo posteriormente.
   * 
   * @param string numero 
   * @return void
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    }else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna  o valor concatenado. Trata o separador decimal
   * 
   * @param numAtual 
   * @param numConcat 
   */
  concatenarNumero(numAtual: string, numConcat: string): string{
    //caso contenha apenas '0' ou null, reiniciar o valor
    if (numAtual === '0' || numAtual === null){
      numAtual = '';
    }

    //primeiro digito é '.', concatena '0' antes do ponto
    if(numConcat === '.' && numAtual === ''){
      return '0.';
    }

    //caso '.' digitado e ja contenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * Executa logica quando um operador for selecionado.
   * Caso ja possua uma operacao selecionada, executa a
   * operacao anterior, e define a nova operacao.
   * 
   * @param operacao 
   */
  definirOperacao(operacao: string): void {
    //apenas define a operacao caso nao exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /*caso a operacao definida e numero 2 selecionado,
      efetua o calculo da operacao*/
    if (this.numero2 !== null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Efetua o calculo de uma operacao
   * 
   * @returns void
   */
  calcular(): void {
    if (this.numero2 === null){
      return;
    }

    this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * 
   * @returns string
   */
  get display(): string{
    if (this.resultado !== null){
      return this.resultado.toString();
    }
    if(this.numero2 !== null){
      return this.numero2;
    }
    if(this.operacao !== null){
      return this.operacao;
    }
    return this.numero1;
  }

}
