
export const pileAoverB = (a, b, blockNumbers)=> {
    const blocksOnTopOfA = []
    const blocksOnTopOfB = []

    if (blocksOnTopOfB.length == 0 && blocksOnTopOfA.length == 0)
    {
        blocksOnTopOfB.push(b)
        blocksOnTopOfB.push(a)
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
}