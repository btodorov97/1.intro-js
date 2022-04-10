function leapYear(year) {
    let condOne = year % 4 == 0 && year % 100 != 0;
    let condTwo = year % 400 == 0;
    if (condOne || condTwo){
        console.log('yes');
        return true;
    }
    else{
        console.log('no');
        return false;
    }
}

console.log(leapYear(1999));
console.log(leapYear(2000));
