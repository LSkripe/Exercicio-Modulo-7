const form = document.querySelector("#form");
const firstNumber = document.querySelector("#numberOne");
const secondNumber = document.querySelector("#numberTwo");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkInput();
})

function checkInput(){

    const menssageErro = ` INVALIDO : ${secondNumber.value} É menor ou igual que ${firstNumber.value} !`;
    const messageSuccess = ` VALIDO : ${secondNumber.value} É manior que ${firstNumber.value} !`;

    if (firstNumber.value === ""){
        firstNumber.style.border = '3px solid red';
        document.querySelector('.erro-first').style.display = 'block';
        return;

    } else if (secondNumber.value === ""){
        document.querySelector('.erro-second').style.display = 'block';  
        secondNumber.style.border = '3px solid red';
        firstNumber.style.border = 'none';
        document.querySelector('.erro-first').style.display = 'none';
        return;
    }
    
    if (firstNumber.value < secondNumber.value) {
        const containerMessagemSucesso = document.querySelector('.info-message');
        document.querySelector('.info-message').innerHTML = messageSuccess;
        containerMessagemSucesso.style.display = 'block';
        containerMessagemSucesso.style.background = '#18da11';

        firstNumber.value = "";
        secondNumber.value = "";
        firstNumber.style.border = 'none';
        document.querySelector('.erro-first').style.display = 'none';
        secondNumber.style.border = 'none';
        document.querySelector('.erro-second').style.display = 'none';

    } else if (firstNumber.value >= secondNumber.value){
        const containerMessagemErro = document.querySelector('.info-message');
        document.querySelector('.info-message').innerHTML = menssageErro;
        containerMessagemErro.style.display = 'block';
        containerMessagemErro.style.background = '#ec0b0b';

        firstNumber.value = "";
        secondNumber.value = "";
        firstNumber.style.border = 'none';
        document.querySelector('.erro-first').style.display = 'none';
        secondNumber.style.border = 'none';
        document.querySelector('.erro-second').style.display = 'none';
    } 
}


