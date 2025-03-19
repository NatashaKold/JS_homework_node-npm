const button = document.getElementById('searchBtn');
let result = document.querySelector(".resultContainer");
let index = document.getElementById('indexInput').value;
const category = document.getElementById('categoriesSelect').value;

async function getItem(){
    result.innerHTML = ``;

if(category==='planets'){
try{
await fetch (`https://swapi.py4e.com/api/planets/${index}`)
.then(response => response.json())
.then((data)=>{
result.innerHTML = `<div style='font-size: 30px'>Планета: </div>
                    <div style='font-size: 30px'>${JSON.stringify(data.name)}</div>`;
})
} catch(error){
    console.log(error);
    result.innerHTML=`<div style='font-size: 30px'> Произошла ошибка: ${error.message} 🙁 </div>`;
} finally{
    result.innerHTML += `<div>StarWars - лучшая сага в мире кино!</div>`;
}
}

if(category==='starships'){
try{
    await fetch (`https://swapi.py4e.com/api/starships/${index}`)
    .then(response => response.json())
    .then((data)=>{
    result.innerHTML = `<div style='font-size: 30px'>Космический корабль: </div>
                        <div style='font-size: 30px'>${JSON.stringify(data.name)}</div>`;
    })
}
catch(error){
    console.log(error);
        result.innerHTML=`<div style='font-size: 30px'> Произошла ошибка: ${error.message} 🙁 </div>`;
    } finally{
        result.innerHTML += result.innerHTML += `<div>StarWars - лучшая сага в мире кино!</div>`;
    }
}


    if(category==='people'){
    try{
    await fetch (`https://swapi.py4e.com/api/people/${index}`)
    .then(response => response.json())
    .then((data)=>{
    result.innerHTML = `<div style='font-size: 30px'>Персонаж: </div>
                        <div style='font-size: 30px'>${JSON.stringify(data.name)}</div>`;
    })
    } catch(error){
        console.log(error);
        result.innerHTML=`<div style='font-size: 30px'> Произошла ошибка: ${error.message} 🙁 </div>`;
    }finally{
        result.innerHTML += result.innerHTML += `<div>StarWars - лучшая сага в мире кино!</div>`;
    }
}
        
}

button.addEventListener('click', getItem())