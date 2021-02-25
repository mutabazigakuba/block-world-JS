import {getUserInput} from './helpers/getUserinput';
const prompt = require('prompt-sync')();

var inputNumber  = getUserInput();
if (Number.isInteger(Number(inputNumber))){

    var initialBlockWorld = createBlocks(inputNumber)

    var a = getBlockNumber('A', initialBlockWorld);
    var b = getBlockNumber('B', initialBlockWorld);

    
    if (!(Number.isInteger(Number(a)))){
        console.log(a)
    }else if (!(Number.isInteger(Number(b)))){
        console.log(b)
    }else if (a == b) {
        console.log('A should not be equal to B')
    }else {
        
        var valu = moveAontoB(a,b);
        
    }
}else{
    console.log(inputNumber)
}

function createBlocks (inputNumber) {
    var initialBlockWorld = new Array(Number(inputNumber))
    var blocks = 0;
    for (let i=0; i< initialBlockWorld.length; i++){
        initialBlockWorld[i] = blocks;
        blocks++
    }
    return initialBlockWorld;
}

function getBlockNumber(number, blockNumbers){
    var userInput = prompt('Input '+number+' =>' );
    if(Number.isInteger(Number(userInput))){
        for(let i=0; i < blockNumbers.length; i++){
            if(Number(userInput) == blockNumbers[i]){
                return userInput
            }
        }
        return 'Number'+number+' is out of bounds';
    }else{
        return number+' should be a number';
    }
}

function moveAontoB(numberA, numberB) {

}