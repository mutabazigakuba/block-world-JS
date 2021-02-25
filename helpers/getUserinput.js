const prompt = require('prompt-sync')();

export const getUserInput = ()=>{
    var number = prompt('Input any number => ');
    if (Number.isInteger(Number(number))){
        if (number < 1 || number > 24){
            return 'Number should be between 0 and 25!';
        }else{
            return number;
        }
    }else {
        console.log(number+' Is not an integer!')
        return number+' Is not an integer!';
    }
}