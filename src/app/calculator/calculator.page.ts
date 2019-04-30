import { Component, OnInit } from '@angular/core';
import { Operation } from './operation.enum';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  resultingNumber = 0;
  firstOperator: number;
  operation: Operation;

  constructor() { }

  ngOnInit() {
  }

  onNullifyResult() {
    this.resultingNumber = 0;
  }

  onDeleteDigit() {
    let stringRep = this.resultingNumber.toString();
    this.resultingNumber = +stringRep.substring(0, stringRep.length - 1);
  }

  onConcatLastDigit(item: number) {
    this.resultingNumber = +this.resultingNumber.toFixed(0).concat(item.toString());
  }

  onMultiply() {
    this.firstOperator = this.resultingNumber;
    this.resultingNumber = 0;
    this.operation = Operation.Multiplication;
  }

  onDifference() {
    this.firstOperator = this.resultingNumber;
    this.resultingNumber = 0;
    this.operation = Operation.Difference;
  }

  onSum() {
    this.firstOperator = this.resultingNumber;
    this.resultingNumber = 0;
    this.operation = Operation.Sum;
  }

  onDivide() {
    this.firstOperator = this.resultingNumber;
    this.resultingNumber = 0;
    this.operation = Operation.Division;
  }

  onShowResult() {
    if (!this.firstOperator || !this.operation) { return; }

    switch (this.operation) {
      case Operation.Multiplication:
        this.resultingNumber *= this.firstOperator;
        break;

      case Operation.Division:
        this.resultingNumber = +(this.firstOperator / this.resultingNumber).toFixed(3);
        break;

      case Operation.Sum:
        this.resultingNumber += this.firstOperator;
        break;

      case Operation.Difference:
        this.resultingNumber = this.firstOperator - this.resultingNumber;
        break;

      default:
        break;
    }
  }


}

