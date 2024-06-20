import { useContext } from 'react';
import {ArrayContext} from '../App'

// calculate maximum elements that can fit on the screen
export function screenCalculation(){
    const screen = Math.floor(window.screen.width * 0.06);
    return screen
}

export function arrayPusher(length:number){
    let arr = []
    for(let i = 0; i<length; i++ ){
        arr.push(randomNumberInRange(3,100))
    }
    return arr
}

export function randomNumberInRange(min:number, max:number) {
    // 👇️ Get the number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }