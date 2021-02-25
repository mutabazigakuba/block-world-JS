
export const moveAoverB = (a, b, blockNumbers)=> {
    const blocksOnTopOfA = []
    const blocksOnTopOfB = []

    if (blocksOnTopOfA.length == 0)
    {
        blocksOnTopOfB.push(a)
        console.log(blocksOnTopOfB)
        for(let i=0; i<blockNumbers.length; i++){
            if (i == a){
                console.log(i+': ')
            }else if (i == b){
                console.log(i+': ['+blocksOnTopOfB+']')
            } else {
                console.log(i+': '+blockNumbers[i])
            }
        }
    }
    if (blocksOnTopOfA.length > 0)
    {

    }
}