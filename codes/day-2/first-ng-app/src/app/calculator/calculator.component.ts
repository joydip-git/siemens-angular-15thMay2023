import { Component } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  //message = 'Simple Calculator'

  // changeMessage(msg: string) {
  //   this.message = msg
  // }

  // first = 0
  // second = 0
  result = 0
  minValue = 1

  // calculate(f: number, s: number) {
  //   this.first = f
  //   this.second = s
  //   this.result = this.first + this.second
  // }
  calculate(calcForm: NgForm) {
    this.result = calcForm.controls['first'].value + calcForm.controls['second'].value
  }
}
