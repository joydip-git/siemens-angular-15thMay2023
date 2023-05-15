//function declaration
function add(a: number, b: number): number {
    return a + b
}
//function expression
var subtract = function (a: number, b: number): number {
    return a - b
}
var divide = function (a: number, b: number): myType {
    if (b === 0)
        return undefined
    else
        return a / b
}