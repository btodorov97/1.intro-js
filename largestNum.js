function largestNum(a,b,c){
    var arr = [a,b,c];
    var largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (largest < arr[i] ) {
            largest = arr[i];
        }
    }
    return console.log(largest);
}

largestNum(3,4,7);
largestNum(300,400,700);
