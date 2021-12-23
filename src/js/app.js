const textarea = document.querySelector("textarea")
const colorinput = document.querySelector("#colorf");
const bginput = document.querySelector("#bgcolor");
const tamanho = document.querySelector("#fontS")
const selec = document.querySelector("#select1")
const sel = document.querySelector("#selectTwo");

const typecolor = ()=>{

    textarea.style.color = colorinput.value;
}

const size = ()=>{
    textarea.style.fontSize = `${tamanho.value}px`
}

setInterval(() => {
    size()
}, 1);


const weight = ()=>{
    if(sel.value === "bold"){
        textarea.style.fontWeight = "900"

    }else if (sel.value === "sb"){
        textarea.style.fontWeight = "600"

    }else if (sel.value === "nm"){
        textarea.style.fontWeight = "normal"
    }
}

const styleF = ()=>{
    if(selec.value === "i"){
        textarea.style.fontStyle = "italic"

    }else if (selec.value === "o"){
        textarea.style.fontStyle = "oblique"

    }else if (selec.value === "normal"){
        textarea.style.fontStyle = "normal"
    }
}

const bg = ()=>{
    textarea.style.backgroundColor = bginput.value;
}