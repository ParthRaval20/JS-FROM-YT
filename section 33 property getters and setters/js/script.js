var person = {
    name : "parth",
    age : 20,

    // getname: function(){
    //     return this.name.toUpperCase(); 
    // }

    // get getname(){
    //     return this.name.toUpperCase();
    // },

    set setname(n){
        this.name = n.toUpperCase();
    }
};

person.setname = "raval"

// console.log(person.getname());
console.log(person);