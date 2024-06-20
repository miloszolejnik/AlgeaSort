
import { useContext, useEffect } from "react"
import {ArrayContext} from '../App'
import styled from "styled-components";
import { ArrayGenerator, screenCalculation, randomNumberInRange } from "../util/utils";
function AlgorythmDisplay(){
    //load context
    const {array, setArray}:any = useContext(ArrayContext);
    
    //initial array
    useEffect(() =>{
        setArray(ArrayGenerator(screenCalculation()));
    }, []);

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
`
const Bar = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    background-color: rgb(153, 228, 163);
`

export default AlgorythmDisplay