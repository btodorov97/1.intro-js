function triangleArea(a,b,c){
    let p = (parseInt(a)+parseInt(b)+parseInt(c))/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

console.log(triangleArea('3','2','1'));
console.log(triangleArea(3,2,1));
