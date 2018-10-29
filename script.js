document.onload = setGrid(16)

function setGrid(size){
    //console.log('Test')
    const container = document.querySelector("#container");

    console.log(container)
    prompt("wait")
    for (let i = 0; i < size; i++){
        
        for(let j = 0; j < size; j++){
            const div = document.createElement('div');
            div.classList.add("grid")
            
            div.id = i+"x"+j;
            container.appendChild(div);
            
        }        
    }
    container.setAttribute("style", "grid-template-columns: repeat(" + size + ", 1fr);");
    //console.log(container)
    console.log(container)
}

