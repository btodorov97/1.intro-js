function BottlesInBoxes(bottles, boxCapacity){
    return Math.ceil(bottles/boxCapacity);
}

console.log(BottlesInBoxes(20, 5));
console.log(BottlesInBoxes(15, 7));
console.log(BottlesInBoxes(5, 10));
