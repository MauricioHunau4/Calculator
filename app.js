//The constants for the exchange
const changeRight = document.getElementById("demoD");
const changeMiddle =  document.getElementById("demoC");
const changeLeft = document.getElementById("demoI");

//Variables for the first number, second number and operator
let operator="", number2="", answ="", exchange="", dot = "",number1="";
let answer = "0"; 

save=(valor)=>{
    number1+= valor
    changeRight.innerHTML = number1
}

//Function for start the calculator
on = ()=> {
    changeLeft.innerHTML = "";
    changeMiddle.innerHTML = "";
    changeRight.innerHTML = "0";
    number1="";
    number2="";
    operator="";
    answer = "0";
}

//Function for shutting down the calculator
off = () => {
    changeLeft.innerHTML = "";
    changeMiddle.innerHTML = "";
    changeRight.innerHTML = "Adios!";
    exchange="";
    answer = "0";
    number1="";
    number2="";
    operator="";
};

//Function for adition, substraction, multiplication y division
adition= () => {
    if(number1!=answer){
        exchange = number1;
        operator = "+";
        changeLeft.innerHTML = number1;
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    }else{
        exchange = number1;
        operator = "+";
        changeLeft.innerHTML = "ANS";
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    };
    number1 = "";
};

substraction = () =>{
    if(number1!=answer ){
        exchange = number1;
        operator = "-";
        changeLeft.innerHTML = number1;
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    } else{
        exchange= number1;
        operator = "-";
        changeLeft.innerHTML = "ANS";
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    }
    number1="";
};

multiplication = () =>{
    if(number1!=answer){
        exchange = number1;
        operator = "*";
        changeLeft.innerHTML = number1;
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    } else{
        exchange = number1;
        operator = "*";
        changeLeft.innerHTML = "ANS";
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    }
    number1="";
};

division = () =>{
    if(number1!=answer ){
        exchange = number1;
        operator = "/";
        changeLeft.innerHTML = number1;
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    } else{
        exchange = number1;
        operator = "/";
        changeLeft.innerHTML = "ANS";
        changeMiddle.innerHTML = operator;
        changeRight.innerHTML = "";
    }
    number1="";
};

//For the buttons ans y del
ans = () =>{
    changeRight.innerHTML = "ANS";
    number1 = answer
};

del = () =>{
    number1="";
    number2="";
    operator="";
    changeRight.innerHTML="0";
    changeLeft.innerHTML="";
    changeMiddle.innerHTML="";
}

//Function for the errores
messageSyntaxError = () =>{
    changeRight.innerHTML="Syntax Error";
    changeLeft.innerHTML="";
    changeMiddle.innerHTML="";
    number1 = "";
    operator = "";
    number2 = "";
}

errordots = (answ) => {
    if(isNaN(answ) === true ){
        messageSyntaxError()
    }else{
        changeRight.innerHTML = answer;
    };
};

//Function to get the result
equal = () =>{
    changeLeft.innerHTML = "";
    changeMiddle.innerHTML = "";
    number2 = number1;
    number1 = exchange;
    if(number1 !="" && operator === "+" && number2 != ""){
        answ = answer = Number(number1) + Number(number2);
        errordots(answ)
    } else if(number1 !="" && operator === "-" && number2 != ""){
        answ = answer = Number(number1) - Number(number2);
        errordots(answ)
    } else if(number1 !="" && operator === "*" && number2 != ""){
        answ = answer = Number(number1) * Number(number2);
        errordots(answ)
    } else if(number1 !="" && operator === "/" && number2 != ""){
        if(number2!=0){
            answ = answer = Number(number1) / Number(number2);
            errordots(answ)
        } else{
            messageSyntaxError()
        }
    }else if(number1 != "" && operator === "" && number2=== ""){
        changeRight.innerHTML= number1;
    }else if(exchange==="" && operator=== "" && number1 ===""){
        
    }else if(number1 != "" && operator != "" && number2 ===""){
        messageSyntaxError()
    }
    else{
        messageSyntaxError()
    }
    exchange = "";
    number1= "";
    number2= "";
    answ= "";
    operator= "";
    return 0;
};

//For pressing the keys in the keyboard
window.onload = ()=> {
    window.onkeydown = (keys)=>{
        if(keys.keyCode === 96 || keys.keyCode === 48){
            save(0)
        }else if(keys.keyCode === 97 || keys.keyCode === 49){
            save(1)
        }else if(keys.keyCode === 98 || keys.keyCode === 50){
            save(2)
        }else if(keys.keyCode === 99 || keys.keyCode === 51){
            save(3)
        }else if(keys.keyCode === 100 || keys.keyCode === 52){
            save(4)
        }else if(keys.keyCode === 101 || keys.keyCode === 53){
            save(5)
        }else if(keys.keyCode === 102 || keys.keyCode === 54){
            save(6)
        }else if(keys.keyCode === 103 || keys.keyCode === 55){
            save(7)
        }else if(keys.keyCode === 104 || keys.keyCode === 56){
            save(8)
        }else if(keys.keyCode === 105 || keys.keyCode === 57){
            save(9)
        }else if(keys.keyCode === 110|| keys.keyCode === 190){
            save('.')
        }else if(keys.keyCode === 106){
            multiplication()
        }else if(keys.keyCode === 111){
            division()
        }else if(keys.keyCode === 107){
            adition()
        }else if(keys.keyCode === 109){
            substraction()
        }else if(keys.keyCode === 13){
            equal()
        }else if(keys.keyCode === 8){
            del()
        }
    };
};   
