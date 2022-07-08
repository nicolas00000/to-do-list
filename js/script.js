const input = document.querySelector(".inputTxt")
const lista = document.querySelector(".lista")
document.onkeydown = teclado
// disparar funcao de adicionar tarefa a partir da tecla enter do teclado
function teclado(e){
    if(e.keyCode===13){
        adicionarTarefa()
    }
}
// adiciona um li no ul (lista)
function adicionarTarefa(){
    //valida se nao é uma mensagem vazia
    if(input.value !== ""){
        lista.innerHTML+= `
        <li class="tarefa">
                    <div class="riscar" onclick="riscarMSG(this)"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg> </div>
                    <span class="textoDoInput"> ${input.value}</span>
                    <button class="apagar" onclick="apagar(this)"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg></button>
                </li>
        `
    }
    //Apaga o valor que estava escrito no campo do input   
    input.value = ""
    //continua seleciondo para voce continuar escrevendo 
    input.focus()
}

//apaga a div PAI do elemento retornado pelo this
function apagar(elemento){
    const pai = elemento.parentNode
    pai.style.display = "none"
}

//se tem tira se nao tem colocar a classe RISCADO no filho da div PAI 
function riscarMSG(elemento){
    const pai = elemento.parentNode
     const texto = pai.children[1];
     const click = pai.children[0];
     texto.classList.toggle("riscado") 
     click.classList.toggle("clicado")

}