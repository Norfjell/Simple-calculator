const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

const dot = document.querySelector('.dot')

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus')
const equal = document.querySelector('.equal');
const multiple = document.querySelector('.multiple');
const divide = document.querySelector('.divide')

const outputButtom = document.querySelector('.output-buttom');
const outputTop = document.querySelector('.output-top');
const ac = document.querySelector('.ac');
const del = document.querySelector('.del')


// function that help with the conditions for the output 

function insertNumber(number){
    if(!outputButtom){
        outputButtom.innerHTML = number;
        } else if(outputButtom.innerHTML.includes('+')) {
            outputTop.innerHTML= outputButtom.innerHTML;
            outputButtom.innerHTML = number;
        } else if(outputButtom.innerHTML.includes('-')) {
            outputTop.innerHTML= outputButtom.innerHTML;
            outputButtom.innerHTML = number;
        } else if(outputButtom.innerHTML.includes('*')) {
            outputTop.innerHTML= outputButtom.innerHTML;
            outputButtom.innerHTML = number;
        }else if(outputButtom.innerHTML.includes('/') && number =='0'){
            outputTop.innerHTML= '';
            outputButtom.innerHTML='Cannot divide by zero';
        }else if(outputButtom.innerHTML.includes('/')) {
            outputTop.innerHTML= outputButtom.innerHTML;
            outputButtom.innerHTML = number;
        }else if(outputButtom.innerHTML==='Cannot divide by zero'){
            outputTop.innerHTML= '';
            outputButtom.innerHTML = number;
        }
        else {
            outputButtom.innerHTML += number;
            }
        }

//function that helps with the conditions for the operations

function calculateFunction(){
    let x = Number(outputButtom.innerHTML);
    let y= Number(outputTop.innerHTML.slice(0,-1));
    if(outputTop.innerHTML.includes('/')) {
        outputButtom.innerHTML= y÷x;
        outputTop.innerHTML=''; 
    }else if(outputTop.innerHTML.includes('*')) {
        outputButtom.innerHTML= y*x;
        outputTop.innerHTML=''; 
    } else if(outputTop.innerHTML.includes('-')) {
        outputButtom.innerHTML= y-x;
        outputTop.innerHTML=''; 
    }else if(outputTop.innerHTML.includes('+')) {
        outputButtom.innerHTML= y+x;
        outputTop.innerHTML=''; 
    }else if(outputButtom.innerHTML==='Cannot divide by zero'){
        outputButtom.innerHTML= '0';
        outputTop.innerHTML=''; 
    
}}

// reset calculator:

ac.addEventListener('click', ()=>{
    outputButtom.innerHTML ='';
    outputTop.innerHTML='';
})

// delete last entry:

del.addEventListener('click', ()=>{
    outputButtom.innerHTML =  outputButtom.innerHTML.slice(0,-1) 
})

// response for clicking the numbers:

one.addEventListener('click', ()=>{
    insertNumber(1);
});

two.addEventListener('click', ()=>{
    insertNumber(2);
});

three.addEventListener('click', ()=>{
    insertNumber(3);
});

four.addEventListener('click', ()=>{
    insertNumber(4);
});

five.addEventListener('click', ()=>{
    insertNumber(5);
});

six.addEventListener('click', ()=>{
    insertNumber(6);
});

seven.addEventListener('click', ()=>{
    insertNumber(7);
});

eight.addEventListener('click', ()=>{
    insertNumber(8);
});

nine.addEventListener('click', ()=>{
    insertNumber(9);
});

zero.addEventListener('click', ()=>{
    insertNumber(0);
});

//response for the dot:

dot.addEventListener('click', ()=>{
    let regex = /[.]/;
    if(outputButtom.innerHTML==='') {
        outputButtom.innerHTML += '0.';
    }if(typeof Number(outputButtom.innerHTML) === 'number' && !regex.test(outputButtom.innerHTML)) {
            outputButtom.innerHTML += '.';
}
})

// response for clicking the matematical operators:

plus.addEventListener('click', ()=>{
    calculateFunction();
    if(!outputButtom.innerHTML.includes('+') && !outputTop.innerHTML.includes('+')){
    if(outputButtom.innerHTML || outputButtom.innerHTML=='0'){
        outputButtom.innerHTML += '+';
} 
}
});

minus.addEventListener('click', ()=>{
    calculateFunction();
    if(!outputButtom.innerHTML.includes('-') && !outputTop.innerHTML.includes('-')){
    if(outputButtom.innerHTML || outputButtom.innerHTML=='0'){
        outputButtom.innerHTML += '-';
}
}
});

multiple.addEventListener('click', ()=>{
    calculateFunction();
    if(!outputButtom.innerHTML.includes('*') && !outputTop.innerHTML.includes('*')){
    if(outputButtom.innerHTML || outputButtom.innerHTML=='0'){
        outputButtom.innerHTML += '*';
}
}
});

divide.addEventListener('click', ()=>{
    calculateFunction();
    if(!outputButtom.innerHTML.includes('/') && !outputTop.innerHTML.includes('/')){
    if(outputButtom.innerHTML || outputButtom.innerHTML=='0'){
        outputButtom.innerHTML += '÷';
}
} 
});

//response for clicking the equal oprator:

equal.addEventListener('click', ()=> {
    calculateFunction()
})
