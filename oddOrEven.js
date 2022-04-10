function oddOrEven(number) {
    if (number % 1== 0) {
         if(number % 2==0){
             console.log("Even");
         } else {
            console.log("Odd");
 }
     } else {
         console.log('invalid number');
     }
 }
 oddOrEven(2);
 oddOrEven(5);
 oddOrEven(1.22);
