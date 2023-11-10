// task 3
randtoDollar(1000)
function randtoDollar(rand){
    let dollar = rand/18.47
    let roundedDollar = dollar.toFixed(2)
    console.log(`R1000 is ${roundedDollar}Dollars`)
}

randtoEuro(1000)
function randtoEuro(rand){
    let euro = rand/19.72
    let roundedEuro = euro.toFixed(2)
    console.log(`R1000 is ${roundedEuro} Euros `)
}
randtoPound(1000)
function randtoPound(rand){
    let pound = rand/22.70
    let roundedPound = pound.toFixed(2)
    console.log(`R1000 is ${roundedPound} Pounds`)
}
VAT(400)
function VAT(j){
  let vat=j*1.15
  let roundedVat = vat.toFixed(2)
    console.log(`The amount after tax is ${roundedVat}`);
}


let firstNum = 8;
let secondNum = 20;
let thirdNum = 14;

compare(firstNum,secondNum)
function compare(s, t){
    if(s>t){
        console.log(`${s} is greater than ${t}`);

    }
    else{ console.log(`${t} is greater than ${s}`); }
   
}

modulus(firstNum)
function modulus(firstNum){
    if(firstNum%2==0){
        console.log(`${firstNum} is even`)
    }
    else{`${firstNum} is odd`}

}

sort(firstNum,secondNum,thirdNum)
function sort(a,b,c){
    if(a>b && b>c ){
        console.log(`${a},${b},${c} in descending order`)

    }
        else if((c>b && b>a))
        console.log(`${a},${b},${c} in descending order is ${c},${b},${a}` )

    if(b>a && a>c ){
        console.log(`${a},${b},${c} in descending order`)

    }
        else if((b>a && a>c))
        console.log(`${a},${b},${c} in descending order is ${b},${a},${c}` )

    if(a>c && c>b ){
        console.log(`${a},${b},${c} in descending order`)

    }
        else if((b>c && c>a))
        console.log(`${a},${b},${c} in descending order is ${b},${c},${a}` )

}

// array
let array = ['matthew','seth','niyaaz','darren','jason']
console.log(array)

let age = 16

if(age>=18){
    console.log('You qaulify for a driver\s lisence');

}
else if(age>=16){
    console.log('You qaulify for driver\s learners');

}
else{
    console.log('You are not old enough for driver\s lisence');

};
// DOM Manipulation
// You qaulify for drivers learners
// document.getElementsByClassName('para')[1].innerText+='Extra'
// 'This is the second paragraphExtra'
// document.getElementsByTagName('p')[0].innerText+='Some extra text'
// 'This is the first paragaraphSome extra text'
// document.querySelector('.para').innerHTML = '<strong>This is first para</strong>'
// '<strong>This is first para</strong>'
