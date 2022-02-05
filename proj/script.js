'use strict';

const workers = ['Name: Margara, salary: 59€, pets: cat hamster','Name: Zuhra, salary: 222€, pets: parrot','Name: Franclin, salary: 559€, pets: none',
'Name: Pastila, salary: 384£, pets: parrot cat','Name: MultiPasport Perker, salary: 246£, pets: none','Name: Nicol Dalas, salary: 174€, pets: parrot parrot',
'Name: Jess Dalas, salary: 89£, pets: none','Name: Margara Cree, salary: 108$, pets: dog cat','Name: Samon Manson, salary: 329₽, pets: parrot dog',
'Name: MultiPasport, salary: 63£, pets: parrot','Name: Markus Makee, salary: 405₽, pets: parrot','Name: Alex Lom, salary: 539£, pets: none',
'Name: Nicol Manson, salary: 324₽, pets: dog','Name: Nicol Makee, salary: 329₽, pets: cat hamster','Name: Sandra, salary: 63€, pets: none',
'Name: Franclin Perker, salary: 253€, pets: cat dog','Name: Jess, salary: 578€, pets: none','Name: Micle, salary: 410£, pets: none','Name: Lilu, salary: 312£, pets: none',
'Name: Samon Dalas, salary: 270₽, pets: parrot dog'];

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

const arrOfObjWorkers = []; // массив из объектов работников

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

const createCards = (num, data) => {
	const cardField = document.createElement('div');
	const card = document.createElement('div');
	const cardBack = document.createElement('div');
	cardField.classList.add('cardField');
	// card.style.width = cards.offsetWidth / 4.5 + 'px';
	// card.style.height = cards.offsetHeight / 2 + 'px';
	card.classList.add('card');
	cardBack.classList.add('cardBack');
	//card.setAttribute('cardnum', `${num}`)
	card.innerHTML = `Name: ${data.name}<br> Salary: ${data.salary}<br> Pets: ${data.pets}`;
	
	cards.append(cardField);
	cardField.append(card);
	cardField.append(cardBack);
	
}
// const checkPets = (str) => {
//   let petReg = /h..ster/gi; // если у работника есть hamster - зафиксировать 
//   str.match(petReg) !== null ? console.log(str) : console.log('not hamsters');
// }

const remover = (array) => {
	let petReg = /h..ster/gi; // если у работника есть hamster - зафиксировать 
	const cloneArray = array.slice(0); // клон массива, но в этом будут удалены те, у кого есть hamster
	for(let i = 0; i < array.length; i += 1){
		cloneArray[i].pets.match(petReg) !== null ? cloneArray[i] = null : '';
	}
	return cloneArray;
}

const array = splitter(workers); // массив из объектов работников 
console.log(array);
const arrayWoutPets = remover(arrOfObjWorkers);
console.log(arrayWoutPets);


const arrCards = document.querySelectorAll('.cardField');
let allow = false;
const deleteCard = () => {
	allow = true;
	console.log(arrCards);
	for(let i=0; i < arrayWoutPets.length; i += 1){
		if(arrayWoutPets[i] === null){ 
			arrCards[i].classList.toggle('cardRoll')
			// arrCards[i].firstChild.classList.toggle('borderNone') 
		}
	}
}

const confirmDeletion = () => {
	for(let i=0; i < arrayWoutPets.length; i += 1){
		if(arrayWoutPets[i] === null && allow){ 
			arrCards[i].style.boxShadow = '0px 0px 10px 10px brown';
			setTimeout(() => {
				arrCards[i].remove();
			}, 1300)

			// arrCards[i].firstChild.classList.toggle('borderNone') 
		}
	}
	allow = false;
}
const remBut = document.getElementById('remBut');
const confBut = document.getElementById('confBut');

remBut.addEventListener('click', deleteCard);
confBut.addEventListener('click', confirmDeletion);

