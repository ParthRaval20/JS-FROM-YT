function compare(a, b){
    // console.log(a+b);
    // let d = a+b;
    // return d;
    if(a>b){
        return 1;
    }
    else if(b>a){
        return -1;
    }else{
        return 0;
    }
}

let c = compare(5, 6);

document.write(c);
