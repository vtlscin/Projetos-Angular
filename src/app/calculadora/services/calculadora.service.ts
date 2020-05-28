/**
 * Servico responsavel por executar as operacoes
 * da calculadora
 * 
 * @author Vinicius Thiago <viniciusthiago2@hotmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas
     para identificar as operacoes de calculo*/
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  
  /**
   * Metodo que calcula uma operacao matematica
   * dado dois numeros 
   * @param num1 number
   * @param num2 number
   * @param operacao string operacao a ser executada
   * @returns number Resultado da operacao
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado da operacao

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
