import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayValue: string = '0';
  currentValue: number = 0;
  operator: string | null = null;
  previousValue: number = 0;

  select(value: number): void {
    this.displayValue = value.toString();
    this.currentValue = value;
  }

  add(): void {
    this.previousValue = this.currentValue;
    this.operator = 'add';
  }

  subtract(): void {
    this.previousValue = this.currentValue;
    this.operator = 'subtract';
  }

  multiply(): void {
    this.previousValue = this.currentValue;
    this.operator = 'multiply';
  }

  divide(): void {
    this.previousValue = this.currentValue;
    this.operator = 'divide';
  }

  equals(): void {    
    switch (this.operator) {
      case 'add':
        this.currentValue = this.previousValue + parseFloat(this.displayValue);
        this.displayValue = this.currentValue.toString();
        break;
      case 'subtract':
        this.currentValue = this.previousValue - parseFloat(this.displayValue);
        this.displayValue = this.currentValue.toString();
        break;
      case 'multiply':
        this.currentValue = this.previousValue * parseFloat(this.displayValue);
        this.displayValue = this.currentValue.toString();
        break;
      case 'divide':
        this.currentValue = this.previousValue / parseFloat(this.displayValue);
        this.displayValue = this.currentValue.toString();
        break;
      default:
        break;
    }
  }
}
