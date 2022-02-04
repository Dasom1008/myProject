var result = document.getElementById("result");
var display = document.getElementById("display");
var sum = 0;

let operator = "";
let num1 = "";
let num2 = "";

const $operatoer = document.querySelectorAll('.add');

document.querySelectorAll("#btn-add").forEach(item => {
    item.addEventListener("click", (e) => {
        switch(operator){
            case "+" : 
                sum = parseInt(num1) + parseInt(num2);
            break

            case "-" : 
                sum = parseInt(num1) - parseInt(num2);
            break

            case "x" : 
                sum = parseInt(num1) * parseInt(num2);
            break

            case "÷" : 
                sum = parseInt(num1) / parseInt(num2);
             break
        }

        operator = item.innerHTML;
        console.log("operator : " + operator)
        result.value += operator;
        if(operator == "="){
            result.value += sum;
            display.value = sum;
        }

    })
})

document.querySelectorAll("#btn-num").forEach(item => {
    item.addEventListener("click",(e) =>{
        if(operator == ""){ // 연산자가 입력되기 전이면 num1에 값 넣기 
            num1 += item.innerHTML;
            console.log("num1 : " + num1);
        }else{ //연산자가 입력된 후이면 num2에 값 넣기 
            num2 += item.innerHTML;
            console.log("num2 : " + num2);
        }
        result.value += item.innerHTML;
    })
})

document.querySelector('#btn_reset').addEventListener("click",(e)=>{
    
    operator = "";
    num1 = "";
    num2 = "";
    display.value = "0";
    result.value = "";
    console.log("reset Click")
})

if(result == ""){
    
}

//1. 첫번쨰 입력 숫자 가져오기 


//2. 연산자 가져오기
//3. 두번째 입력 숫자 가져오기 
//4. display에 연산 과정 보여주기 
//5. 계산된 값 출력하기 