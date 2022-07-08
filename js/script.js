const input = document.querySelector(".inputTxt")
const lista = document.querySelector(".lista")
document.onkeydown = teclado

function teclado(e){
    if(e.keyCode===13){
        adicionarTarefa()
    }
}
function adicionarTarefa(){
    if(input.value !== ""){
        lista.innerHTML+= `
        <li class="tarefa">
                    <input type="checkbox" class="riscar">
                    <span class="textoDoInput"> ${input.value}</span>
                    <button class="apagar" onclick="apagar(this)">x</button>
                </li>
        
        `
    }
    input.value = ""
    input.focus()
}

function apagar(elemento){
    const pai = elemento.parentNode
    pai.style.display = "none"
}