
export const moveAontoB = (a, b, blockNumbers)=>{
    const blocksOnTopOfA = []
    const blocksOnTopOfB = []

    if (blocksOnTopOfA.length == 0 && blocksOnTopOfB.length == 0)
    {
        blocksOnTopOfB.push(b)
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
    else if (blocksOnTopOfA.length > 0 && blocksOnTopOfB.length == 0)
    {
        var newBlocks = new Array(blockNumbers.length)
        newBlocks.splice(a, 0, a)
        for(i=0; i<blocksOnTopOfA.length; i++){
            newBlocks.splice(blocksOnTopOfA[i+1], 0, blocksOnTopOfA[i+1])
        }
        blocksOnTopOfA.push(b)
    }
    else if (blocksOnTopOfA.length == 0 && blocksOnTopOfB.length > 0)
    {

    }
    else {

    }
}