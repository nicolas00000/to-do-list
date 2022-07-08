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
                    <input type="checkbox" class="riscar" id="check" onclick="riscarMSG(this)">
                    <span class="textoDoInput"> ${input.value}</span>
                    <button class="apagar" onclick="apagar(this)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg></button>
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

function riscarMSG(elemento){
     const pai = elemento.parentNode
     const filho = pai.children[1];
     pai.classList.toggle("riscado") 
     filho.classList.toggle("cor")
    }