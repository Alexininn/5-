'use strict';

const createCards = (data) => {
	const cardField = document.createElement('div');
	const card = document.createElement('div');
	const cardBack = document.createElement('div');
	cardField.classList.add('cardField');
	card.classList.add('card');
	cardBack.classList.add('cardBack');
	card.innerHTML = `<div class='cardData'>
		<b>Name: ${data.name}</b> 
		<b>Salary: ${data.salary}</b> 
		<b>Pets: ${data.pets}</b>
	</div>`;
	
	cards.append(cardField);
	cardField.append(card);
	cardField.append(cardBack);
	
}