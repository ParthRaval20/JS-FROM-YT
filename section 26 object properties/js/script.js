// object

let person = {
    firstName: 'Parth',
    lastName: 'Raval'

};

person.firstName = 'Prem'; // this will rename firstName
person.age = 20; //this will add property
//delete person.age; //this is delete property

console.log(person.firstName); //this is .dot notation
console.log(person.lastName); //this is array type notation
console.log(person['lastName']);
console.log(person);

for(let key in person){
    // console.log(key);
    console.log(key + ": " + person[key]);
}
