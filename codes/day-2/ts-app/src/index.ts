/*
//ES6 (2015) const keyword
//const numbers = new Array(1, 2, 3, 4, 5)
const numbers = [1, 2, 3, 4, 5]
const filteredNumbers = numbers.filter(
    (num: number) => num % 2 === 0
)
console.log('filtered numbers')
filteredNumbers.forEach(
    (num: number) => console.log(num)
)
const transformedArray = numbers.map(
    (num: number) => num * 5
)
console.log('transformed numbers')
transformedArray.forEach(
    (num: number) => console.log(num)
)

var x = 200
function foo() {
    console.log(x)
    let x: number;
    x = 10
    console.log(x)//10
    for (let i = 0; i < 1; i++) {
        let x
        x = 'joydip'
        console.log(x)//20
    }
    console.log(x)//10

    test()
    function test() {
        let x: number = 100
        console.log(x)
    }
    console.log(x)
    //testAgain()
    var testAgain
    testAgain = function () {

    }
    testAgain()
}
foo()
*/

//constructor function
// function person(pname: string, psal: number, pid: number) {
//     let info: string
//     info = ''
//     this.name = pname
//     this.id = pid
//     this.salary = psal
//     this.print = function () {
//         info = this.name + ' ' + this.id + ' ' + this.salary
//         return info
//     }
// }
// const personRef = new person('joy', 1000, 1)

class Person {
    // private _name: string;
    // private _id: number;
    // private _salary: number;

    constructor(private _name: string, private _id: number, private _salary: number) {
        // this._name = _name
        // this._id = _id
        // this._salary = _salary
    }
    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }

    print() {
        return this._name + ' ' + this._id + ' ' + this._salary
    }
}
const personRef = new Person('joy', 1, 1000)
console.log(personRef.name)
console.log(personRef['salary'])
console.log(personRef.print())

class Trainer extends Person {
    constructor(_name: string, _id: number, _salary: number, private _subject: string) {
        super(_name, _id, _salary)
    }
    print(): string {
        return super.print() + ' ' + this._subject
    }
}

interface IOperations {
    getData(): string;
    setData(data: any): void;
}
class Opertaions implements IOperations {
    getData(): string {
        return 'data'
    }
    setData(data: any): void {

    }
}
interface IPerson {
    name: string;
    id: number;
    salary: number;
}
type personType = IPerson | undefined
const people: personType[] = [{
    id: 1,
    name: 'joy',
    salary: 1000
}]