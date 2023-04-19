let book = ["math", "science", "physics", "bio"];
// let bookwithpages = [
//     ["math", "300"], 
//     ["physics", "500"], 
//     ["bio" , "400"]
// ];
// let booklength = book.length
// let book2 = ["Hindi","English"];
// book.push("Hindi"); this will be placed last
// book.unshift("Hindi"); this will be placed first
// book.pop(); it will remove last
// book.shift() //it will remove first 
// book.splice(1,1);

// console.log(book.length);
// let position = book.indexOf("bio");
// console.log(book);
// let wordarray = book.join('-');
// let newbook = book.concat(book2);
// console.log(newbook);

// let fetch = bookwithpages[1][0];
// for(i=0; i<booklength; i++){
//     console.log(`Element ${i} is ${book[i]} \n`)
// }
// console.log(fetch);
// console.log(position)

book.forEach(myfu);

function myfu(value){
    console.log(value);
}
