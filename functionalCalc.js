function calculator(x,y,o){
    switch (o) {
        case '+':
            return parseInt(x)+parseInt(y);
        case '-':
            return parseInt(x)-parseInt(y);
        case '*':
            return parseInt(x)*parseInt(y);
        case '/':
            return parseInt(x)/parseInt(y);
        default:
        return('enter valid number or operator +,-,* or /');
    } 
}

console.log(calculator('18','-1','*'));
