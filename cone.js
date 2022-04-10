function cone(h,r){
    let V = 1/3*Math.PI*(parseInt(r)**2)*parseInt(h);
    let s = Math.sqrt(r**2 + h**2);
    let S1 = Math.PI*r*(r+s);
    return console.log(`Обема на конуса е ${V} ,а повърхнината му е ${S1}`);
}

cone(3,4);
