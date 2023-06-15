const form = document.querySelector("#form");
const firstNumber = document.querySelector("#numberOne");
const secondNumber = document.querySelector("#numberTwo");

let x = '';
let y = '';

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkInput();
})

function checkInput(){

    const menssageErro = ` INVALIDO : Valor "A ${firstNumber.value}" É maior ou igual ao Valor "B ${secondNumber.value}" !`;
    const messageSuccess = ` VALIDO : Valor "B ${secondNumber.value}" É maior que Valor A ${firstNumber.value}" !`;


    if (x === ""){
        firstNumber.style.border = '3px solid red';
        document.querySelector('.erro-first').style.display = 'block';
        return;
    } else if (y === ""){
        document.querySelector('.erro-second').style.display = 'block';  
        secondNumber.style.border = '3px solid red';
        firstNumber.style.border = 'none';
        document.querySelector('.erro-first').style.display = 'none';
        return;
    }

    if ( x >= y) {
        const containerMessagemErro = document.querySelector('.info-message');
        document.querySelector('.info-message').innerHTML = menssageErro;
        containerMessagemErro.style.display = 'block';
        containerMessagemErro.style.background = '#ec0b0b';


        firstNumber.style.border = 'none';
        document.querySelector('.erro-first').style.display = 'none';
        secondNumber.style.border = 'none';
        document.querySelector('.erro-second').style.display = 'none';
        firstNumber.value = "";
        secondNumber.value = "";
        x = '';
        y = '';

    } else if ( x < y ){
        const containerMessagemSucesso = document.querySelector('.info-message');
        document.querySelector('.info-message').innerHTML = messageSuccess;
        containerMessagemSucesso.style.display = 'block';
        containerMessagemSucesso.style.background = '#18da11';

        firstNumber.style.border = 'none';
        document.querySelector('.erro-first').style.display = 'none';
        secondNumber.style.border = 'none';
        document.querySelector('.erro-second').style.display = 'none';
        firstNumber.value = "";
        secondNumber.value = "";
        x = '';
        y = '';
    }  
}


firstNumber.addEventListener('keyup', function(event){
    console.log(event.target.value)
    x = parseInt(event.target.value);
    return x;
})

secondNumber.addEventListener('keyup', function(event){
    console.log(event.target.value)
    y = parseInt(event.target.value);
    return y; 
})

