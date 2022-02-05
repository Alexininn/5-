'use strict';

'use strict';

class Worker { // объект работника
  constructor(name, salary, pets, number){
    this.name = name;
    this.salary = salary;
    this.pets = pets;
		this.number = number;
  }
}

function createWorker(name, salary, pets, number){ // фабрика работников
  return new Worker(name, salary, pets, number);
};


const splitter = (arr) => { // разделитель массива и формирование объектов, которые в дальнейшем становятся работниками
  let reg = /(.*:\s)(.*)/; // во 2-ой группе будет значение ключа объекта
  let NewArr = arrOfObjWorkers;
  for(let i=0; i < arr.length; i += 1){
    let person = arr[i].split(', ');
    person[0] = String(person[0]).replace(reg, '$2'); // поле name: содержит содержимое 2-ой группы. Например Margara
    person[1] = String(person[1]).replace(reg, '$2'); // аналогично с salary
    person[2] = String(person[2]).replace(reg, '$2'); // pets
    NewArr.push(createWorker(person[0], person[1], person[2], i));
		createCards(i, NewArr[i]);
      //checkPets(person[2]); // проверка работников на наличие питомцев 
  }
  return NewArr;
}

const array = splitter(workers); // массив из объектов работников 
console.log(array);

const remover = (array) => {
	let petReg = /h..ster/gi; // если у работника есть hamster - зафиксировать 
	const cloneArray = array.slice(0); // клон массива, но в этом будут удалены те, у кого есть hamster
	for(let i = 0; i < array.length; i += 1){
		cloneArray[i].pets.match(petReg) !== null ? cloneArray[i] = null : '';
	}
	return cloneArray;
}


const arrayWoutPets = remover(arrOfObjWorkers);
console.log(arrayWoutPets);