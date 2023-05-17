import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // first = new FormControl(0)
  // second = new FormControl(0)
  // calcForm = new FormGroup({
  //   firstCtrl: this.first,
  //   secondCtrl: this.second
  // })
  calcForm = new FormGroup({
    first: new FormControl('', [Validators.required, Validators.min(1)]),
    second: new FormControl('', [Validators.required, Validators.min(1)])
  })
  result = 0

  get first() {
    return this.calcForm.get('first')
  }
  get second() {
    return this.calcForm.controls['second']
  }
  calculate() {
    //this.result = this.first?.value + this.second?.value
    console.log(this.calcForm)
    //this.calcForm.controls['first']?.value
    const firstNum = this.first?.value
    const secondNum = this.second?.value
    if (firstNum && secondNum) {
      this.result = (+firstNum) + (+secondNum)
    }
  }
}
