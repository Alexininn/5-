'use strict';

const workers = ['Name: Margara, salary: 59€, pets: cat hamster','Name: Zuhra, salary: 222€, pets: parrot','Name: Franclin, salary: 559€, pets: none',
'Name: Pastila, salary: 384£, pets: parrot cat','Name: MultiPasport Perker, salary: 246£, pets: none','Name: Nicol Dalas, salary: 174€, pets: parrot parrot',
'Name: Jess Dalas, salary: 89£, pets: none','Name: Margara Cree, salary: 108$, pets: dog cat','Name: Samon Manson, salary: 329₽, pets: parrot dog',
'Name: MultiPasport, salary: 63£, pets: parrot','Name: Markus Makee, salary: 405₽, pets: parrot','Name: Alex Lom, salary: 539£, pets: none',
'Name: Nicol Manson, salary: 324₽, pets: dog','Name: Nicol Makee, salary: 329₽, pets: cat hamster','Name: Sandra, salary: 63€, pets: none',
'Name: Franclin Perker, salary: 253€, pets: cat dog','Name: Jess, salary: 578€, pets: none','Name: Micle, salary: 410£, pets: none','Name: Lilu, salary: 312£, pets: none',
'Name: Samon Dalas, salary: 270₽, pets: parrot dog'];

class Worker {
    constructor(name, salary, pets){
        this.name = name;
        this.salary = salary;
        this.pets = pets;
    }
}

function createWorker(name, salary, pets){
    return new Worker(name, salary, pets);
};

const splitter = (arr) => {
    let NewArr = [];
    for(let i=0; i < arr.length; i += 1){
        let person = arr[i].split(', ');
        NewArr.push(createWorker(person[0], person[1], person[2]));
        
    }
    return NewArr;
}

const array = splitter(workers);
