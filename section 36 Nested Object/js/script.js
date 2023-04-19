var user = {
    id: 101,
    email: "abc@gmail.com",
    personalInfo: {
        name: "abc",
        address: {
            street: "def",
            city: "rajkot",
            country: "India"
        }
    }
};

console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.country);