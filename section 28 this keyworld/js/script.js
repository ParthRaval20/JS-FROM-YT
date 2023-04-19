// object

let person = {
    firstName: 'Parth',
    lastName: 'Raval',
    sayHello() {
        console.log("Hello i am " + this.firstName + " and i have a " + car.brand
            + " car");
    }

};


let car = {
    brand: 'tata',
    model: 'safari'
}

person.sayHello();