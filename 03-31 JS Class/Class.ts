class Person {
    private fName: string
    private sName: string
    constructor(firstName: string, secondName: string) {
        this.fName = firstName;
        this.sName = secondName;
    }

    getFullName(): string {
        return `${this.fName} ${this.sName}`;
    }
}

class Student extends Person {
    rollNumber: number
    marks: number[]

    constructor(rollNumber: number, marks: number[], firstName: string, secondName: string) {
        super(firstName, secondName);
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    getStudentDetails() {
        return `${this.getFullName()} ${this.rollNumber} ${this.marks}`
    }

}

var student = new Student(21, [20, 24, 23, 24], "John", "Doe");
console.log(student.getStudentDetails());
console.log(student.getFullName());