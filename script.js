const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordTwo = document.getElementById('passwordtwo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordTwoValue = passwordTwo.value.trim()
    
    //validação de user name
    if(usernameValue === "") {
        //mostrar o erro
        //adicionar a classe error
        errorValidation(username, 'Preencha este campo')
    } else {
        //adicionar a classe de sucesso
        successValidation(username)
    }

    //validação de email
    if(emailValue === '') {
        errorValidation(email, 'Preencha este campo')
    } else {
        successValidation(email)
    }

    //validação de senha
    if(passwordValue === '') {
        errorValidation(password, "Preencha este campo")
    } else if(passwordValue.length < 8){
        errorValidation(password, "Sua senha precisa ter mais de 8 caracteres")
    } else {
        successValidation(password)
    }

    //confirmação de senha
    if(passwordTwoValue === '') {
        errorValidation(passwordTwo, "Preencha este campo")
    } else if(passwordTwoValue !== passwordValue) {
        errorValidation(passwordTwo, "As senhas precisão ser iguais")
    } else {
        successValidation(passwordTwo)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

const mostrar = document.querySelector('#show-password');

mostrar.addEventListener("change", (el) => {
    if (mostrar.checked) {
        password.type = "text"
        passwordTwo.type = "text"
    }
});

selecionado.dispatchEvent(new Event("change"));

function cadastrar (usernameValue, emailValue, passwordValue) {
    const user ={
        name: usernameValue,
        email: emailValue,
        password: passwordValue,
    }

    console.log(user)
}