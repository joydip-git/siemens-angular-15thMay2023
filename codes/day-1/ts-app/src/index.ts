//var utilityModule = require('./utility')
import { add, divide } from "./utility";
var x = 10
console.log(typeof x)

var y = 'joydip'
console.log(typeof y)

var isTrue = true
console.log(typeof isTrue)

var obj = {
    //value propeties
    name: 'joydip',
    salary: 1000,
    id: 1,
    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

console.log(typeof obj)


// console.log(utilityModule.addFn(10, 20))
// console.log(typeof utilityModule.addFn)

console.log(add(10, 20))
console.log(typeof add)

var data: number = 10
// data = 'siemens'
var expo = data.toExponential(2)
console.log(expo)

// var res = utilityModule.divFn(12, 0)
var res = divide(12, 0)
console.log(typeof res)