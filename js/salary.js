"use strict"

const firedBySalary = (() => {

  const random = (n) => { //Функция для рандома
    return Math.floor(Math.random() * n); 
  };

  const getSalaryCurrency = (arrayObj) => { // Получение фамилий работников
    let arrayWorkers = [...arrayObj];
    arrayWorkers.forEach((worker) => {
      worker.currency = worker.salary.match(/.$/)[0]; 
    });
    return arrayWorkers;
  };
  const arrayWorkersWithCurrency = getSalaryCurrency(array);
  console.log(arrayWorkersWithCurrency);

  const blackCurrency = () => {
    const dollarOrEuro = ["$", "€"];
    return dollarOrEuro[random(2)];
  };

  const currency = blackCurrency();
  console.log(currency);

  const fireByCurrency = () => {
    return (arrayWorkersWithCurrency.map((el) => { 
      if (el.currency === currency) {
        return null;
      } else {
        return el;
      }
    }));
  };
  const arr = fireByCurrency();
})();
