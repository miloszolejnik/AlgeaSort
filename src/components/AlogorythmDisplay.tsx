
import { useContext, useEffect } from "react"
import {ArrayContext} from '../App'
import styled from "styled-components";
import { screenCalculation, arrayPusher, randomNumberInRange } from "../util/utils";
function AlgorythmDisplay(){
    
    const {array, setArray}:any = useContext(ArrayContext)
    
    
    // push numbers between 3 and selected value into array
    // set initial value of the array between 3 and allowed max
    useEffect(() =>{
       let initialLength = randomNumberInRange(3,screenCalculation());
       setArray(arrayPusher(initialLength));
    }, [])

    return(
        <section>
            <StyledContainer>
                {array.map((value:number, key:number)=>{
                    return(
                        <Bar style={{height: `${value}%`}} key={key}>{value}</Bar>
                    )
                })}  
            </StyledContainer>
        </section>
    )
}

const StyledContainer = styled.div`
    height: 80vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 0 1rem;
`
const Bar = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    background-color: rgb(153, 228, 163);
`

export default AlgorythmDisplay