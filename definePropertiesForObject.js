function createObject(property1,value1,property2,value2,property3,value3){
    const person = {};
    Object.defineProperty(person,property1,{
        value:value1
    });
    Object.defineProperty(person,property2,{
        value:value2
    });
    Object.defineProperty(person,property3,{
        value:value3
    });
    return person;
}

console.log(createObject('name','Pesho','age','23','gender','male'));
