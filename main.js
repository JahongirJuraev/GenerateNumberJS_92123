let number = document.getElementById('number');
let button = document.getElementById('generateBtn');

const randomGenerateNumber = () =>{
    let generateNumber = Math.floor(Math.random() * 100 + 1)
    number.textContent = generateNumber;
    
    if(generateNumber == 13){
        alert('My favourite Number is 13')
        number.style.color = "red";
    }else{
        number.style.color = "#000000c7";
    }
}

button.addEventListener('click', randomGenerateNumber);
