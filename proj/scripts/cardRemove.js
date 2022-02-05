'use strict';

const arrCards = document.querySelectorAll('.cardField');

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


remBut.addEventListener('click', deleteCard);
confBut.addEventListener('click', confirmDeletion);

