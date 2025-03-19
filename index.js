async function getItem(){
    const result = document.querySelector(".resultContainer");
    let index = document.getElementById('indexInput').value;
    const category = document.getElementById('categoriesSelect').value;

if(category==='planets'){
await fetch (`https://swapi.py4e.com/api/planets/${index}`)
.then(response => response.json())
.then((data)=>{
result.innerHTML = `<div style='font-size: 30px'>Планета: </div>
                    <div style='font-size: 30px'>${JSON.stringify(data.name)}</div>`
})
.catch((error)=>{
    result.innerHTML=`<div style='font-size: 30px'> Произошла ошибка: ${error.message} 🙁 </div>`
})
}
}