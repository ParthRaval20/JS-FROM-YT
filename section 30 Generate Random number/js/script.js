let x = Math.random(); // 0 - 1 

let y = Math.random() * 10; // 0 - 9 in point

let z = Math.floor(Math.random() * 10); // 0 - 9 int 

let a  = Math.floor(Math.random() * 10) + 1; //1 to 10

function getRandom(min, max){
    let b = Math.floor(Math.random() * (max - min + 1)) + min;
    return b;
}

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log( getRandom(10, 20));