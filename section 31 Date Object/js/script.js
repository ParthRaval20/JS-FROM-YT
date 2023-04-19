// let x = new Date();

// let y = new Date(2023, 11);

// let z = new Date("october 13, 2018 11:12:33");

// z.setFullYear(2023);//this will be update date time and year



// z.setDate(z.getDate() +50)
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(z.getTime());
// console.log(z.getFullYear());
// console.log(z.getMonth());
// console.log(z.getDate());
// console.log(z.getHours());
// console.log(z.getMinutes());
// console.log(z.getSeconds());
// console.log(z.getDay());

// let x = new Date("october 13, 2025 11:12:33");
let x = new Date();
let y = new Date();

if (y > x) {
    console.log("x is past date");
}else if (x > y) {
    console.log("x is future date");
}else{
    console.log("x is same date");
}