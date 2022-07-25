const table = document.getElementsByClassName('container')[0];
let size = 10; 

const newSize = () => {
    const changeSize = () =>{
        if (newsize.value>0){
            size = newsize.value;
            table.replaceChildren();
            start();
        }
        else{
            alert('Value must be higher than 0')
        }
    }
    let submit = document.getElementById('submit');
    let newsize = document.getElementById('text');
    newsize.addEventListener('keypress', (event) =>{
        if (event.key === "Enter"){
            changeSize();   
        }
        submit.addEventListener('click', (event) =>{
            changeSize();
        })
    })
}
const reset = () =>{
    const btn = document.getElementsByClassName('btn')[0];
    btn.addEventListener('click', (event)=>{
        table.replaceChildren();
        start();
    })
}
const tableGrid = () =>{
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        table.appendChild(div);
    }
    table.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    table.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
const color = () =>{
    return colorPick = document.getElementById('color').value;
}
const draw = () =>{
    for (let i = 0; i < size*size; i++) {
        const grid = document.getElementsByClassName('grid')[i];
        grid.addEventListener('mouseover', (event) =>{
            grid.style.backgroundColor = `${color()}`;
        })
    }
}
const bgcolor = () =>{
    const bg = document.getElementById('bgcolor');
    for (let i = 0; i < size*size; i++) {
        bg.addEventListener('input', (event) =>{
            table.style.backgroundColor = `${bg.value}`;
        })
    }

}
const start = () =>{
    tableGrid();
    bgcolor();
    draw();
    newSize();
    reset();
}
start();
