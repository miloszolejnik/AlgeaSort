import styled from "styled-components"
import { arrayPusher, screenCalculation, randomNumberInRange } from "../util/utils"
import { bubble, quickSort } from "../util/algorithms"
import { useContext, useEffect, useState } from "react"
import { ArrayContext } from "../App"

function OptionsForm(){
    //load context
    const {array, setArray, forceUpdate}:any = useContext(ArrayContext)

    //select type of sorting
    const [algorithm , setAlgorithm] = useState('bubble')

    function regenerateArray(value:number){
        setArray(value)
    }

    //create empty array for selector options
    const arr = [] as any

    //generate aviable options for the screen size
    function generateOptions(){
        for(let i = 3; i<screenCalculation(); i++){
            arr.push(i)
        }
    };
    generateOptions();

    //Handle change on number of records
    function handleChange(e:any | number){
        const newValue =+ (e)
        setArray(arrayPusher(newValue));
    }
    // check for selected sorting method, update it and execute
    function sortHandler(alg:any){
        let sorted;
        if(bubble){
            sorted = bubble(array)
        }else{
            sorted = quickSort(array)
        }
        setArray(sorted)
        forceUpdate()
    }
    //handle change to algorithm type
    function setAlgHandler(e: any | string){
        setAlgorithm(e)
        localStorage.setItem('algorithm', e)
    }
    // Check and update local storage for last alg used by user
    useEffect(()=>{
        const localAlg = localStorage.getItem('algorithm');
        if(localAlg === null){
            localStorage.setItem('algorithm', algorithm)
        }else{
            setAlgorithm(localAlg)
        }
    },[algorithm])

    return(
        <StyledSection>
            <StyledBtn onClick={() => regenerateArray(arrayPusher(randomNumberInRange(screenCalculation()))as any)}>GENERATE NEW ARRAY</StyledBtn>
            <label>Set the numbers of records</label>
            <SyledSelector defaultValue={array.length-1} onChange={(e) => handleChange(e.target.value)}>
                {arr ? arr.map((option:number, key:number) =>{
                    return <StyledOption value={option} key={key}>{option}</StyledOption>
                }): null}
            </SyledSelector>
            <StyledBtn onClick={() => sortHandler(algorithm)as any} >Sort</StyledBtn>
            <label>Sorting Algorithm</label>
            <SyledSelector onChange={(e) => setAlgHandler(e.target.value)}>
                <option value={'Bubble'}>Bubble</option>
                <option value={'Quicksort'}>Quicksort</option>
            </SyledSelector>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    gap: 1rem;
`

const StyledBtn = styled.button`
    border: none;
    border-radius: 2rem;
    background-color: rgb(69, 192, 85);
    font-size: larger;
    padding: 0.5rem 2rem;
    cursor: pointer;
`

const SyledSelector = styled.select`
    border: none;
    border-bottom: solid black 1px;
    cursor: pointer;
    font-size: large;
    text-align: center;
    width: 80%;
    height: 2rem;
`
const StyledOption = styled.option`
`
export default OptionsForm