document.onload = setGrid(16)
const cells = document.querySelectorAll(".grid");
cells.forEach(div => div.addEventListener('click', setColor));

function setGrid(size){
    //console.log('Test')
    const container = document.querySelector("#container");
    
    for (let i = 0; i < size; i++){
        
        for(let j = 0; j < size; j++){
            const div = document.createElement('div');
            div.classList.add("grid")
            
            div.id = i+"x"+j;
            container.appendChild(div);
        }        
    }
    container.setAttribute("style", "grid-template-columns: repeat(" + size + ", 1fr);");
}

function reset() {

}

function setColor(e){
    const color_option = document.querySelectorAll("select"); 
    const div = document.querySelector(`.grid[id="${e.target.id}"]`);

    if(e.ctrlKey){
        
        if(color_option[0].selectedIndex ==0) {
            //grey
           div.setAttribute("style", "background-color: rgba(130, 127, 125);");
        } else if (color_option[0].selectedIndex == 1){
            //red
           div.setAttribute("style", "background-color: rgb(255, 17, 0);");
        } else if (color_option[0].selectedIndex == 2){
            //green
           div.setAttribute("style", "background-color: rgb(63, 173, 63);");
        } else if (color_option[0].selectedIndex == 3){
            //blue
           div.setAttribute("style", "background-color: rgba(24, 78, 185);");
        } else if (color_option[0].selectedIndex == 4){
            //random
            var color1, color2, color3;
            color1 = Math.floor(Math.random()*256);
            color2 = Math.floor(Math.random()*256);
            color3 = Math.floor(Math.random()*256);
            div.setAttribute("style", "background-color: rgba(" + color1+","+color2+","+color3+");");
        } else if (color_option[0].selectedIndex == 5){
            //Erase - white
            div.setAttribute("style", "background-color: rgba(255, 255, 255);");
        }
    }
}

const button = document.querySelector('#reset');
button.addEventListener('click', reset);

function msg(str){
    console.log(str)
}