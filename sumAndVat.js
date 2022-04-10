function calculateSumAndVat(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += Number(element);
    }
    let vat = sum * 0.2;
    let total = sum * 1.2;
    console.log(`SUM = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`Total = ${total}`);
}

calculateSumAndVat(['1','2','3']);
