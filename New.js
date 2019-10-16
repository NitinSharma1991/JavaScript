function Vehicle(name, maker, engine) {
    this.name = name,
        this.maker = maker,
        this.engine = engine
};

Vehicle.prototype.getDetails = function () {
    console.log('The name of the bike is ' + this.name);
}

let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());
console.log(bike1.engine);

var map3 = new Map([["whole numbers", [1, 2, 3, 4]],
    ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
    ["negative numbers", [-1, -2, -3, -4]]]);

console.log("Map3");
console.log(JSON.stringify(map3.get("whole numbers")));

const promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a > 10) {
        reject('failed');
    } else {
        resolve('success');
    }
});

promise.then((message) => {
    console.log('this  message is ' + message)
}).catch((message) => {
    console.log("promise " + message)
});


