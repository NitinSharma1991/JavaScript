// import Vehicle from './New.js';

console.log("you suck");

let number = 10;
console.log(number);
number = "ppp";
console.log(number);
const a = 10 + 10;
console.log(a);
const string = '"kaka" "total" total = "Dhamal"';
console.log(string);

function returnDog(myDog) {
    let results = "";
    results += "The " + myDog;
    return results;
}

const array = [1, 2, 3, 4, 4];
console.log(array[1]);
array.push(10);

console.log(array[array.length - 1]);
console.log(returnDog("BullDog"));
console.log("Array" + JSON.stringify(array));

let object;
object = {
    "name": "Nitin",
    "array": [1, 3]
};
object.bark = "Kaka";
console.log(object.bark);
console.log(object.array);

const val = "name";
const result = object[val];
console.log(result);


/*
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');

console.log(bike1.engine);*/
