function distance(V1,V2,T){
    let S1 = parseInt(V1)/3.6*parseInt(T);
    let S2 = parseInt(V2)/3.6*parseInt(T);
    let distance2 = 0;
    if (S1>S2){
        distance2 = S1 - S2;
        return console.log(`Кола номер 1 е първа и е ${distance2} метра по-напред!`);
    }
    else if (S1<S2){
        distance2 = S2 - S1;
        return console.log(`Кола номер 2 е първа и е ${distance2} метра по-напред!`);
    }
    else {
        return console.log(`Колите се движат с една и съща скорост и са една до друга.`);
    }
}

distance (81,80,60);
