/*
function person(_name, _id, _salary) {
    this._name = _name
    this._id = _id
    this._salary = _salary
}
person.prototype.print = function () {
    return this._id + this._name + this._salary
}
console.log(person.prototype)

function trainer(_name, _id, _salary, _subject) {
    person.call(this, _name, _id, _salary)
    this._subject = _subject
    this.print = function () {
        return this.__proto__.print.apply(this) + this._subject
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype)
*/
class Person {
    constructor(_name, _id, _salary) {
        this._name = _name
        this._id = _id
        this._salary = _salary
    }
    print() {
        return this._id + this._name + this._salary
    }
}
class Trainer extends Person {
    constructor(_name, _id, _salary, _subject) {
        super(_name, _id, _salary)
        this._subject = _subject
    }
    print() {
        return super.print() + this._subject
    }
}
new Trainer('joy', 1, 1000, 'JS')
