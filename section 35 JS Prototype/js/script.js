// var student1 = {
//     firstName : "parth",
//     lastName : "raval",
//     age: 25,
//     class: 10,
// };

function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

Student.prototype.nationality = "India";

Student.prototype.name = function(){
    return this.firstName + " "+ this.lastName;
}

var student1 = new Student("parth", "Raval", 17, 10);
var student2 = new Student("prem", "Raval", 17, 10);

console.log(student1.name());
console.log(student2.name());