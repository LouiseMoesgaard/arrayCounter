"use strict";

let counter = 0;
let array = [];
countingArray();

function countingArray() {
    setTimeout( ()=>{
        if(array.length <= 8) {
            pushCounter();
        } else {
            array = array.slice(0,8);
            pushCounter();
        }
        console.log(array);
        countingArray();

    },1000)
    
}

function pushCounter() {
    array = array.reverse();
    array.push(counter);
    array = array.reverse();
    counter++;
}
