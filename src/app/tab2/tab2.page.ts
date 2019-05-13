import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private peso:number;
  private altura:number;
  private imcValor: number;
  private imcMensagem: string;
    constructor(public router: Router) { }

    calculadoraIMC () {
      if (this.peso > 0 && this.altura > 0) {
        let finalBmi = this.peso / (this.altura / 100 * this.altura / 100);
        this.imcValor = parseFloat(finalBmi.toFixed(2));
        this.setBMIMessage();
      }
    }
    
    // setBMIMessage will set the text message based on the value of BMI
    private setBMIMessage() {
      if (this.imcValor < 18.5) {
        this.imcMensagem = "Abaixo do Peso"
      }
    
      if (this.imcValor > 18.5 && this.imcValor < 25) {
        this.imcMensagem = "Normal"
      }
    
      if (this.imcValor > 25 && this.imcValor < 30) {
        this.imcMensagem = "Acima do Peso"
      }
    
      if (this.imcValor > 30) {
        this.imcMensagem = "Obeso"
      }
    
    }

  

  
}
