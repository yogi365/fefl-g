var Person = /** @class */ (function () {
    function Person(firstName, secondName) {
        this.fName = firstName;
        this.sName = secondName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.fName, " ").concat(this.sName);
    };
    return Person;
}());
var student = new Person("Abc", "Xyz");
console.log(student.fName);
