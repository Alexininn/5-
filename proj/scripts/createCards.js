'use strict';

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