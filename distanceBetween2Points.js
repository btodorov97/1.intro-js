function distanceBetween2points (x1, x2, y1, y2) {
    let pointa = {x:parseInt(x1),y:parseInt(y1)};
    let pointb = {x:parseInt(x2),y:parseInt(y2)};
    let distance = Math.sqrt(Math.pow((pointb.x - pointa.x),2) + Math.pow((pointb.y - pointa.y),2));
    return distance;
}

console.log(distanceBetween2points('1','2','3','4')); 
console.log(distanceBetween2points(5,6,7,8)); 
console.log(distanceBetween2points(10,20,30,40)); 
