function distanceBetween2points (x1, x2, y1, y2) {
    // let axisx = [x1,y1];
    // let axisy = [x2,y2];
    let y = x2 - x1;
    let x = y2 - y1;
//    let distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
    let distance2 = Math.sqrt(x*x + y*y); 
    return distance2;
}

console.log(distanceBetween2points('1','2','3','4')); 
console.log(distanceBetween2points(5,6,7,8)); 
console.log(distanceBetween2points(10,20,30,40)); 
