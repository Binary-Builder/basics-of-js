let person = {
    name: 'bogos binted', 
    age: 99090990
};

//Dot notation
person.name = 'John';

//Bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);