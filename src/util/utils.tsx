
// calculate maximum elements that can fit on the screen
export function screenCalculation(){
    const screen = Math.floor(window.screen.width * 0.06);
    return screen
}

// 👇️ Get the number between min (inclusive) and max (inclusive)
export function randomNumberInRange( max:number) {
    return Math.floor(Math.random() * (max - 3 + 1)) + 3;
  }

    // push numbers between 3 and selected value into array
export function arrayPusher(length:number){
    let arr = []
    for(let i = 0; i<length; i++ ){
        arr.push(randomNumberInRange(100) as number)
    }
    return arr
}

export function ArrayGenerator(arrLength:number){
    return(arrayPusher(arrLength))
}