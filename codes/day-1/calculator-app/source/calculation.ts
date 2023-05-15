export const add = (a: number, b: number): number => a + b

export const subtract = (a: number, b: number): number => a - b

export const multiply = (a: number, b: number): number => a * b

export const divide = (a: number, b: number): number => {
    //if(a/b===Infinity)
    if (b === 0) {
        throw new Error('denominator should be > 0')
    }
    return a / b
}