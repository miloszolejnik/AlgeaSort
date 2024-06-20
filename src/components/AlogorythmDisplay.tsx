
import { useState, useEffect } from "react"
import styled from "styled-components";

function AlgorythmDisplay(){
    const [array, setArray] = useState([1,2]) as any;
    function randomNumberInRange(min:number, max:number) {
        // 👇️ Get the number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    function ArrayPusher(length:number){
        let arr = []
        for(let i = 0; i<length; i++ ){
            arr.push(randomNumberInRange(3,10))
        }
        setArray(arr)
    }
    useEffect(() =>{
       let initialLength = randomNumberInRange(3,10);
       ArrayPusher(initialLength);
    }, [])

    return(
        <StyledContainer>
            {array.map((value:number, key:number)=>{
                return(
                    <Bar style={{height: `${value}%`}} key={key}>{value}</Bar>
                )
            })}  
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
`
const Bar = styled.div`
    display: flex;
    flex-grow: 1;
    background-color: rgb(153, 228, 163);
`

export default AlgorythmDisplay