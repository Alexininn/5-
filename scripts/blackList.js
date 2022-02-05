"use strict"

const firedByBlackList = (() => {
  const random = (n) => { //Функция для рандома
    return Math.floor(Math.random() * n); 
  }

  const getSurnames = (arrayObj) => { // Получение фамилий работников
    let arrayWorkers = [...arrayObj];
    arrayWorkers.forEach((worker) => {
      worker.surname = worker.name.match(/(\w+)\s(\w+)/) === null ? "" :worker.name.match(/(\w+)\s(\w+)/)[2]; 
    });
    return arrayWorkers;
  };

  const workersWithSurnames = getSurnames(array);  // array - нужно связать

  const blackList = () => {
      return workersWithSurnames[random(20)].surname;  // рандом одной фамилии для черного списка
  };

  const surname = blackList(); 
  console.log(surname);

  // ---- Массив оставшихся сотрудников после фильтра через BlackList
  const fireWorkers = () => {  //  Формирование массива из уволенных сотрудников 
    return (workersWithSurnames.map((el) => {  // (возможен пустой массив по условию - тогда никто не уволен)
      if (!surname || el.surname !== surname) {
        return el;
      } else {
        return null;
      }
    }));
  };
  const firedWorkers = fireWorkers();

  return firedWorkers;  
})();
