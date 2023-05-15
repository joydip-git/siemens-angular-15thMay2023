import { add } from "./calculation";

const calculate = () => {
    const firstTxtBox = <HTMLInputElement>document.getElementById('txtFirst')
    const first = Number(firstTxtBox.value)

    const secondTxtBox = <HTMLInputElement>document.getElementById('txtSecond')
    const second = Number(secondTxtBox.value)

    const result = add(first, second)

    const resultTxtBox = <HTMLInputElement>document.getElementById('txtResult')
    resultTxtBox.innerText = result.toString()
}