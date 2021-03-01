import { getUserInput } from './helpers/getUserinput';
import { moveAoverB } from './helpers/moveAoverB';
import { moveAontoB } from './helpers/moveAontoB';
import { pileAontoB } from './helpers/pileAontoB';
import { pileOverB } from './helpers/pileAoverB';

const prompt = require('prompt-sync')();

start();

function start() {

    // getting user blocks range input from the cmd
    var inputNumber = getUserInput();

    // check if the return is valid
    if (Number.isInteger(Number(inputNumber))) {

        // create blocks array depending on the number entered
        var initialBlockWorld = createBlocks(inputNumber)

        // get value of block A
        var a = getBlockNumber('A', initialBlockWorld);

        // get value of block B
        var b = getBlockNumber('B', initialBlockWorld);

        // check if blocks A is number
        if (!(Number.isInteger(Number(a)))) {
            console.log(a + '\n')
        }
        
        // check if blocks B is number
        else if (!(Number.isInteger(Number(b)))) {
            console.log(b + '\n')
        } 
        
        // check if block A and B are not equal numbers
        else if (a == b) {
            console.log('A should not be equal to B\n')
        } 
        
        else {

            // get the move selected by the user
            var selectedMove = moveOption();

            // if move is option 1, then move is A over B
            if (selectedMove == 1) {
                moveAontoB(a, b, initialBlockWorld);
            }

            // if move is option 2, then move is A onto B
            else if (selectedMove == 2) {
                moveAoverB(a, b, initialBlockWorld);
            }

            // if move is option 3, then move is pile A over B
            else if (selectedMove == 3) {
                pileAontoB(a, b, initialBlockWorld);
            }

            // if move is option 4, then move is pile A onto B
            else if (selectedMove == 4) {
                pileOverB(a, b, initialBlockWorld);
            }

            // else move is  not accepted
            else {
                console.log('Value not allowed')
            }
        }
    }
    else {
        console.log(inputNumber)
    }
}

// function to create blocks 
function createBlocks(inputNumber) {
    var initialBlockWorld = new Array(Number(inputNumber))
    var blocks = 0;
    for (let i = 0; i < initialBlockWorld.length; i++) {
        initialBlockWorld[i] = blocks;
        blocks++
    }
    console.log('Block numbers created: [' + initialBlockWorld + '] \n')
    return initialBlockWorld;
}

// function to get user input for the blocks to move
function getBlockNumber(number, blockNumbers) {
    var userInput = prompt('Input block number: ' + number + ' => ');
    if (Number.isInteger(Number(userInput))) {
        for (let i = 0; i < blockNumbers.length; i++) {
            if (Number(userInput) == blockNumbers[i]) {
                return userInput
            }
        }
        return '\nNumber ' + number + ' is out of bounds\n';
    }
    else {
        return '\n' + number + ' should be a number\n';
    }
}

// fucntion to get move required by the user given in select options
function moveOption() {
    console.log('')
    const inputOptions = 'Select: #1. Move A onto B #2. Move A over B #3. Pile A onto B #4. Pile A over B => ';
    var selectOption = prompt(inputOptions);
    if (Number.isInteger(Number(selectOption))) {
        return selectOption
    } else {
        return '\nshould be 1, 2, 3, 4 \n';
    }
}