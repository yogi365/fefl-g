// function sum(a:any, b:any) {
//     return a + b;
// }

// function sum(a: number, b: number) {
//     // return a + b;
//     console.log(a + b);
// }

// function sum(a: number, b: number): number {
//     return a + b;
// }

//optional paramters

// function sum(a: number, b?: number): number {
//     if (typeof b == "undefined") {
//         return a + 2;
//     }
//     return a + b;
// }



// console.log(sum(2));

//callback function

// var sum = (a: number, b: number):number =>  { return a + b };
// type sum = (a: number, b: number) => number;

// function abc(num1: number, num2: number, callback: sum) {
//     return callback(num1, num2);
// }

// function sumReturning(a: number, b: number): number {
//     return a + b;
// }
// console.log(abc(2, 3, sumReturning))

//Rest Operators

// function sum(num1: number, ...num2: number[]): number {
//     num2.forEach(num => {
//         num1 += num;
//     })
//     return num1;
//     // return num1 + num2;
// }

// console.log(sum(2));

//default parameter

// function sum(a: number, b: number = 2): number {

//     return a + b;
// }

// console.log(sum(2))

// function overloading

// function sum(a: number, b: number): number;
// function sum(a: number, b: number, c?: number): number;
// function sum(a: number, b: number, c?: number, d?: number): number {
//     if (typeof a == "number" && typeof b == "number" && typeof c == "number" && typeof d == "number") {
//         return a + b + c + d;
//     }

//     if (typeof a == "number" && typeof b == "number" && typeof c == "undefined" && typeof d == "undefined") {
//         return a + b;
//     }
//     if (typeof c != "undefined") {
//         return a + b + c;
//     }

//     return 0;

// }

// console.log(sum(2, 3));

// function sum(num1: number, num2: number): number;
// function sum(num1: string, num2: string): string;
// function sum(num1: number | string, num2: number | string): number | string {
//     if (typeof num1 == "string" || typeof num2 == "string") {
//         return num1.toString() + num2.toString()
//     }
//     return num1 + num2;
// }

// sum("2", "4");

//Generics

// function RandomArrayData<U>(arr: U[]) {
//     return arr[2]
// }

// RandomArrayData<number>([1, 2, 3, 4, 5]);
// RandomArrayData<string>(["a", "b", "c", "d"]);


// function sum<u >(num1: u, num2: u) {
//     if (typeof num1 == "string") {
//         return num1.toString() + num2;
//     }

//     if (typeof num1 == "number" && typeof num2 == "number") {
//         return num1 + num2;
//     }

//     throw new Error("Invalid argument")

// }
// sum<number>(2, 4);
// sum<string>("s", "d");


type Person = {
    firstName: string,
    secondName: string
}

type Employee = {
    empId: number,
    salary: number
}

function ReturnObject<u, v>(obj1: u, obj2: v): u & v {
    return { ...obj1, ...obj2 }
}

var a = ReturnObject<Person, Employee>(
    { firstName: "Abc", secondName: "xyz" },
    { empId: 2123, salary: 20000 }
)



