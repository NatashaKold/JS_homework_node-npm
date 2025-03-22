const button = document.getElementById('searchBtn');
let result = document.getElementById('response');
let errorMessage = document.getElementById('errorMessage');

async function getItem(){
    result.textContent = '';
    errorMessage.textContent='';

    let index = document.getElementById('indexInput').value;
    const category = document.getElementById('categoriesSelect').value;

if(!index){
    errorMessage.textContent = 'Введите номер от 1 до 10!';
    return;
}

const url = `https://swapi.py4e.com/api/${category}/${index}`;

try{
 const response = await fetch (url);
 if(!response.ok){
    throw new Error("Не удалось загрузить данные!");
 }
 const data = await response.json();

let categoryName = category ==='planets'? 'Планета' :
category ==='starships'?'Космический корабль':
category ==='people'?'Персонаж': 'Объект';

 if(!data.name){
    throw new Error(`Данные об объекте ${categoryName} не найдены`);
 }

result.textContent = `${categoryName}: ${data.name}`;
} catch(error){
    console.log(error);
    errorMessage.textContent= `Произошла ошибка: ${error.message} 🙁`;
} finally{
    document.querySelector('resultContainer').textContent = `StarWars - лучшая сага в мире кино!`;
}
}

button.addEventListener('click', getItem);