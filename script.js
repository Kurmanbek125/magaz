let addToDoBtn  = document.getElementById('addToDo');
let toDoCnt = document.getElementById('toDoCnt');
let inputFile = document.getElementById('inputFile');

addToDoBtn.addEventListener('click', function(){
    let pg = document.createElement('p');

    pg.innerText = inputFile.value;
    toDoCnt.appendChild(pg);

    inputFile.value = "";

    pg.addEventListener('dblclick', function(){
        toDoCnt.removeChild(pg);
    })
})
