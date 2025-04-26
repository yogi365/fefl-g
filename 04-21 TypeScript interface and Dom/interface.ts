// type Vehicle = {
//     name: string,
//     engine: string,
//     readonly noOfWheels: number,
//     drive(): void
// }

// type Accessories = {
//     seat: string,
//     headlight: string
// }

// var bike: Vehicle & Accessories = {
//     name: "KTM",
//     engine: "4stroke",
//     noOfWheels: 2,
//     drive: function () {
//         console.log('Driving  a bike');
//     },
//     seat: "PU Leather",
//     headlight: "Led"
// }

// bike.noOfWheels = 4;

interface Vehicle {
    name: string,
    engine: string,
    readonly noOfWheels: number,
    drive(): void
}

interface Accessories extends Vehicle {
    seat: string,
    headlight: string
}

var bike: Accessories = {
    name: "KTM",
    engine: "4stroke",
    noOfWheels: 2,
    drive: function () {
        console.log('Driving  a bike');
    },
    seat: "PU Leather",
    headlight: "Led"
}

