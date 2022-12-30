let coloredColor=document.querySelectorAll('.color')
let coloredBackgrounds=document.querySelectorAll('.background-color')
let coloredBorders=document.querySelectorAll('.border-color')
let selectedColor=JSON.parse(localStorage.getItem('tasks-color'))||'#EEE'

let red='#F00'
let blue='#55F'
let green='#0F0'
let yellow='#FF0'
let orange='#F72'
let purple='#90F'
let magenta='#F0A'
let cyan='#0FF'
let light='#EEE'
let dark='#555'

const changeColor=(color)=>{

    coloredColor=document.querySelectorAll('.color')
    coloredBackgrounds=document.querySelectorAll('.background-color')
    coloredBorders=document.querySelectorAll('.border-color')

    if(color==red){
        color=red
    }
    else if(color==blue){
        color=blue
    }
    else if(color==green){
        color=green
    }
    else if(color==yellow){
        color=yellow
    }
    else if(color==orange){
        color=orange
    }
    else if(color==purple){
        color=purple
    }
    else if(color==magenta){
        color=magenta
    }
    else if(color==cyan){
        color=cyan
    }
    else if(color==light){
        color=light
    }
    else if(color==dark){
        color=dark
    }
    coloredColor.forEach((element)=>{
        element.style.color=color
    })
    coloredBackgrounds.forEach((element)=>{
        element.style.backgroundColor = color
    })
    coloredBorders.forEach((element)=>{
        element.style.borderColor=color
        element.style.outlineColor=color
    })

    selectedColor=color
    localStorage.setItem('tasks-color',JSON.stringify(color))
}

changeColor(JSON.parse(localStorage.getItem('tasks-color'))||green)