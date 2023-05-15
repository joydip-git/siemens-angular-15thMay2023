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

//function declaration
function add(a, b) {
    return a + b
}
console.log(add(10, 20))
console.log(typeof add)

//function expression
var subtract = function (a, b) {
    return a - b
}

var data = 10
data = 'siemens'
var expo = data.toExponential(2)
console.log(expo)