import { TestBed } from '@angular/core/testing';
import { NumeroDirective } from './numero.directive';
import { ElementRef } from '@angular/core';
 
describe('NumeroDirective', () => {
  
  let el: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ElementRef
      ]
    });
  });
  
  it('should create an instance', () => {
    const directive = new NumeroDirective(el);
    expect(directive).toBeTruthy();
  });
});
