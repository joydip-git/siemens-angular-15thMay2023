import { add } from "./calculation";

const calculate = () => {
    const firstTxtBox = <HTMLInputElement>document.getElementById('txtFirst')
    const first = Number(firstTxtBox.value)

    const secondTxtBox = <HTMLInputElement>document.getElementById('txtSecond')
    const second = Number(secondTxtBox.value)

    const result = add(first, second)

    const resultTxtBox = <HTMLInputElement>document.getElementById('txtResult')
    resultTxtBox.value = result.toString()
    console.log(result)
}

document
    .getElementById('btnCalulate')
    ?.addEventListener('click', calculate)

// window.addEventListener(
//     'DOMContentLoaded',
//     function () {
//         document
//             .getElementById('btnCalulate')
//             ?.addEventListener('click', calculate)
//     })