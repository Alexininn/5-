'use strict';

const arrCards = document.querySelectorAll('.cardField');

const deletionModule = (() => {

	const deleteCard = () => {
		allow = true;
		console.log(arrCards);
		for(let i=0; i < arrayWoutPets.length; i += 1){
			if(arrayWoutPets[i] === null){ 
				arrCards[i].classList.add('cardRoll')
			}
		}
		for(let i=0; i < firedByBlackList.length; i += 1){
			if(firedByBlackList[i] === null){ 
				arrCards[i].classList.add('cardRoll')
			}
		}
		for(let i=0; i < firedBySalary.length; i += 1){
			if(firedBySalary[i] === null){ 
				arrCards[i].classList.add('cardRoll')
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
			}
		}
		for(let i=0; i < firedByBlackList.length; i += 1){
			if(firedByBlackList[i] === null && allow){ 
				arrCards[i].style.boxShadow = '0px 0px 10px 10px brown';
				setTimeout(() => {
					arrCards[i].remove();
				}, 1300)

			}
		}
		for(let i=0; i < firedBySalary.length; i += 1){
			if(firedBySalary[i] === null && allow){ 
				arrCards[i].style.boxShadow = '0px 0px 10px 10px brown';
				setTimeout(() => {
					arrCards[i].remove();
				}, 1300)
			}
		}
		allow = false;
	}
	remBut.addEventListener('click', deleteCard);
	confBut.addEventListener('click', confirmDeletion);
})(arrayWoutPets, firedByBlackList, firedBySalary);
