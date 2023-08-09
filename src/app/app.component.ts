import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  type: string = 'long';
  price!: number;
  atr!: number;
  risk!: number;
  stopLossesNumber!: number;
  stopLossValue!: number;
  takeProfitValue!: number;
  totalValue!: number;

  onCalculateButtonClick() {
    const stopLossFromPrice = 0.1 * this.atr;
    if (this.type === 'long') {
      this.stopLossValue = this.roundToDecimalPlaces(this.price - stopLossFromPrice, 5);
      this.takeProfitValue = this.roundToDecimalPlaces(this.price + (stopLossFromPrice * this.stopLossesNumber), 5);
    } else {
      this.stopLossValue = this.roundToDecimalPlaces(this.price + stopLossFromPrice, 5);
      this.takeProfitValue = this.roundToDecimalPlaces(this.price - (stopLossFromPrice * this.stopLossesNumber), 5);
    }
    this.totalValue = this.roundToDecimalPlaces((this.risk / stopLossFromPrice) * this.price, 5);

  }

  roundToDecimalPlaces(number: number, decimalPlaces: number): number {
    return parseFloat(number.toFixed(decimalPlaces));
  }
}
