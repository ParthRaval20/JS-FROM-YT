let age = 19;
let hasvotercard = 'no'

if(age>=18 && hasvotercard == 'yes'){
    alert("You Can vote!");
}   else if(age>=18 && hasvotercard != 'yes'){
    alert("Get your voter id card !");
}else{
    alert("You cannot vote!")
}