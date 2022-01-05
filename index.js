function darBoasVindas(){
  setTimeout(() => {
    let nomeInformado = prompt('Qual o seu nome?')
    alert('Ola ' + nomeInformado + '. Seja bem-vindo ao nosso site.')
  }, 0200);
}

//Pegar os elementos do input
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')

//pegar elemento que contem a mensagem de erro
const error = document.getElementsByClassName("error")

//Criar variaveis para ver se os campos estão validos
let nomeValido = false
let emailValido = false
let telefoneValido = false
let mensagemValida = false

//pegar o botao para depois trocar o type dele para submit
const botao = document.getElementById('botao')

//criar função para caso esteja o campo vazio
function validarFormulario(){
//Validação nome
    if(nome.value == ''){
        nome.setAttribute('style', 'border: 2px solid red;')
        error[0].style.display = 'block'
        error[0].innerHTML = '* campo obrigatório'
    } else if(nome.value.length <= 2){
        error[0].innerHTML = '* Insira ao menos 3 caracteres'
        error[0].style.display = 'block'
        nome.setAttribute('style', 'border: 2px solid red;')
    } else {
        nome.setAttribute('style', 'border: 2px solid green;')
        error[0].style.display = 'none'
        nomeValido = true
    }

//Validação email
    if(email.value == ''){
        email.setAttribute('style', 'border: 2px solid red;')
        error[1].style.display = 'block'
        error[1].innerHTML = '* campo obrigatório'
    } else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        error[1].style.display = 'block'
        error[1].innerHTML = "Insira um email válido"
        email.setAttribute('style', 'border: 2px solid red;')
    } else {
        email.setAttribute('style', 'border: 2px solid green;')
        error[1].style.display = 'none'
        emailValido = true
    }

//Validação telefone
    if(telefone.value == ''){
        telefone.style.borderColor = 'red'
        error[2].style.display = 'block'
        error[2].innerHTML = '* campo obrigatório'
    } else if(telefone.value.indexOf('(') == -1 || telefone.value.indexOf(')') == -1 || telefone.value.indexOf('-') == -1 || telefone.value.length <= 13){
        error[2].style.display = 'block'
        error[2].innerHTML = "* Telefone invalido. Digite da maneira correta!!"
        telefone.setAttribute('style', 'border: 2px solid red;')
    } else {
        telefone.style.borderColor = 'green'
        error[2].style.display = 'none'
        telefoneValido = true
    }

//Validação mensagem
    if(mensagem.value == ''){
        mensagem.style.borderColor = 'red'
        error[3].style.display = 'block'
        error[3].innerHTML = '* campo obrigatório'
    } else {
        mensagem.style.borderColor = 'green'
        error[3].style.display = 'none'
        mensagemValida = true
    }

//Validação de todos os inputs
    if(nomeValido && emailValido && telefoneValido && mensagemValida){
        botao.setAttribute("type", 'submit')
        alert('Formulario enviado com sucesso!!')
    } else {
        alert("Verifique se todos os campos estão preenchidos corretamente por favor.")
    }
}



/*
    Adicional: 
    Eu fiz as mesmas validações extras que estão na função da validação do formualrio, porém coloquei para eles aparecerem antes mesmo do usuario clicar em enviar. 
    Assim, imaginei que pudesse evitar erros do usuario antes mesmo dele enviar:
    -minimo 3 caracteres no Nome
    -email deve conter @ e .
    -telefone conter '()' e '-' para colocar o DDD e separar o telefone
    -mensagem com limites de caracteres
*/


nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        error[0].innerHTML = '* Insira ao menos 3 caracteres'
        error[0].style.display = 'block'
        nome.setAttribute('style', 'border: 2px solid red;')
    } else {
        error[0].style.display = 'none'
        nome.setAttribute('style', 'border: 2px solid green;')
    }
})


email.addEventListener('keyup', () => {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        error[1].style.display = 'block'
        error[1].innerHTML = "Insira um email válido"
        email.setAttribute('style', 'border: 2px solid red;')
    }else {
        error[1].style.display = 'none'
        email.setAttribute('style', 'border: 2px solid green;')
    }
})

telefone.addEventListener('keyup', () => {
    if(telefone.value.indexOf('(') == -1 || telefone.value.indexOf(')') == -1 || telefone.value.indexOf('-') == -1 || telefone.value.length <= 13){
        error[2].style.display = 'block'
        error[2].innerHTML = "*     Telefone invalido. Digite da maneira correta!!"
        telefone.setAttribute('style', 'border: 2px solid red;')
    } else {
        error[2].style.display = 'none'
        telefone.setAttribute('style', 'border: 2px solid green;')
    }
})


mensagem.addEventListener('keyup', () => {
    if(mensagem.value.length >= 320){
        error[3].innerHTML = '* Limite de caracteres atingidos'
        error[3].style.display = 'block'
        mensagem.setAttribute('style', 'border: 2px solid red;')
    } else {
        error[3].style.display = 'none'
        mensagem.setAttribute('style', 'border: 2px solid green;')
    }
})
