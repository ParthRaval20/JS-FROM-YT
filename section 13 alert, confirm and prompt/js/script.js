// alert('welcome!');
// let age = prompt('Enter your age');

// if(age != null){
//     document.write('Your Age is ${age}');
// }
// else{
//     document.write('Age Filed was blank');
// }
let response = confirm('Are You sure, You want to Delete?');

if(response){
    document.write('Deleted');
}else{
    document.write('Not Deleted');
}