const button = document.getElementById('searchBtn');
let result = document.getElementById('response');
let errorMessage = document.getElementById('errorMessage');
let index = document.getElementById('indexInput').value;
const category = document.getElementById('categoriesSelect').value;


async function getItem(){
    result.textContent = '';
    errorMessage.textContent='';

if(category==='planets'){
try{
 await fetch (`https://swapi.py4e.com/api/planets/${index}`)
.then(response => response.json())
.then((data)=>{
result.textContent = `Планета: ${JSON.stringify(data.name)}`;
})
} catch(error){
    console.log(error);
    errorMessage.textContent= `Произошла ошибка: ${error.message} 🙁`;
} finally{
    document.querySelector('resultContainer').textContent = `StarWars - лучшая сага в мире кино!`;
}
}

if(category==='starships'){
try{
    await fetch (`https://swapi.py4e.com/api/starships/${index}`)
    .then(response => response.json())
    .then((data)=>{
    result.textContent = `Космический корабль: ${JSON.stringify(data.name)}`;
    })
}
catch(error){
    console.log(error);
        errorMessage.textContent=` Произошла ошибка: ${error.message} 🙁`;
    } finally{
        document.querySelector('resultContainer').textContent = `StarWars - лучшая сага в мире кино!`;
    }
}


    if(category==='people'){
    try{
    await fetch (`https://swapi.py4e.com/api/people/${index}`)
    .then(response => response.json())
    .then((data)=>{
    result.textContent = `Персонаж: ${JSON.stringify(data.name)}`;
    })
    } catch(error){
        console.log(error);
        errorMessage.textContent=`Произошла ошибка: ${error.message} 🙁`;
    }finally{
        document.querySelector('resultContainer').textContent = `StarWars - лучшая сага в мире кино!`;
    }
}
        
}

button.addEventListener('click', getItem())