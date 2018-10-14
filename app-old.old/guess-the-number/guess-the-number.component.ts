import { Component } from "@angular/core";

@Component({
  selector: 'guess-the-number',
  templateUrl: './guess-the-number.component.html'
})
export class GuessTheNumberComponent{
  public noOfTries: number = 0;
  public deviation: number;
  public guess: number;
  public systemNumber: number;
  public currency: number;
  public emotion:string = "happy";
  public isShow = { 'font-weight': 'bold', 'font-size': '24px' };
  public products = [
    {name: 'Product1', cost: 20, code: 'p1'},
    {name: 'Product2', cost: 40, code: 'p2'},
    {name: 'Product3', cost: 60, code: 'p3'},
    {name: 'Product4', cost: 80, code: 'p4'},
    {name: 'Product5', cost: 100, code: 'p5'}
];
  constructor(){
    this.initializeGame()
  }
  initializeGame(){
    this.noOfTries = 0;
    this.systemNumber = Math.floor(Math.random() * 1000 + 1 );
    console.log(this.systemNumber);
    this.guess = null;
    this.deviation = null;
    this.currency = 30;
  }
  verifyGuess(){
    this.deviation = this.systemNumber - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }

}
