// var arrModule = require('./types')
// console.log(arrModule.arr)

import { myType, numbers } from "./types";
console.log(numbers)

//function declaration
export function add(a: number, b: number): number {
    return a + b
}
//function expression
export var subtract = function (a: number, b: number): number {
    return a - b
}
export var divide = function (a: number, b: number): myType {
    if (b === 0)
        return undefined
    else
        return a / b
}

// module.exports = {
//     addFn: add,
//     subFn: subtract,
//     divFn: divide
// }