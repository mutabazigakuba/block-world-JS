import {getUserInput} from './helpers/getUserinput';
import {moveAoverB} from './helpers/moveAoverB';
import {moveAontoB} from './helpers/moveAontoB';
import {pileAontoB} from './helpers/pileAontoB';
import {pileOverB} from './helpers/pileAoverB';

const prompt = require('prompt-sync')();

var inputNumber  = getUserInput();
if (Number.isInteger(Number(inputNumber)))
{
    var initialBlockWorld = createBlocks(inputNumber)

    var a = getBlockNumber('A', initialBlockWorld);
    var b = getBlockNumber('B', initialBlockWorld);

    
    if (!(Number.isInteger(Number(a))))
    {
        console.log(a+'\n')
    }else if (!(Number.isInteger(Number(b))))
    {
        console.log(b+'\n')
    }else if (a == b) 
    {
        console.log('A should not be equal to B\n')
    }else 
    {
        var selectedMove = moveOption();
        if (selectedMove == 1){
            moveAontoB(a, b, initialBlockWorld);
        }
        else if (selectedMove == 2){
            moveAoverB(a, b, initialBlockWorld);
        }
        else if (selectedMove == 3){
            pileAontoB(a, b, initialBlockWorld);
        }
        else if (selectedMove ==4){
            pileOverB(a, b, initialBlockWorld);
        }
        else{
            console.log('Value not allowed')
        }
    }
}
else{
    console.log(inputNumber)
}

function createBlocks (inputNumber) {
    var initialBlockWorld = new Array(Number(inputNumber))
    var blocks = 0;
    for (let i=0; i< initialBlockWorld.length; i++)
    {
        initialBlockWorld[i] = blocks;
        blocks++
    }
    console.log('Block numbers created: ['+initialBlockWorld+'] \n')
    return initialBlockWorld;
}

function getBlockNumber(number, blockNumbers){
    var userInput = prompt('Input block number: '+number+' => ' );
    if(Number.isInteger(Number(userInput)))
    {
        for(let i=0; i < blockNumbers.length; i++)
        {
            if(Number(userInput) == blockNumbers[i])
            {
                return userInput
            }
        }
        return '\nNumber '+number+' is out of bounds\n';
    }
    else{
        return '\n'+number+' should be a number\n';
    }
}

function moveOption(){
    console.log('')
    const inputOptions = 'Select: #1. Move A onto B #2. Move A over B #3. Pile A onto B #4. Pile A over B => ';
    var selectOption = prompt(inputOptions);
    if (Number.isInteger(Number(selectOption)))
    {
        return selectOption
    }else{
        return '\nshould be 1, 2, 3, 4 \n';
    }
}