import styled from "styled-components"
import { arrayPusher, screenCalculation, randomNumberInRange } from "../util/utils"
import { bubble, quickSort } from "../util/algorithms"
import { useContext, useEffect } from "react"
import { ArrayContext } from "../App"

function OptionsForm(){
    //load context
    const {array, setArray, forceUpdate}:any = useContext(ArrayContext)

    function regenerateArray(value:number){
        setArray(value)
    }
    const screen = screenCalculation();

    //create empty array for selector options
    const arr = [] as any

    //generate aviable options for the screen size
    function generateOptions(){
        for(let i = 3; i<screen; i++){
            arr.push(i)
        }
    };
    generateOptions();
    // change the range of the array
    function handleChange(e:any | number){
        const newValue =+ (e)
        setArray(arrayPusher(newValue));
    }
    // change sorting type
    function sortTypeHandler(alg:string){
        if('bubble'){
            localStorage.setItem('algorithm', alg);
        }
        if('quickSort'){
            localStorage.setItem('algorithm', alg)
        }
    }
    // sort array using correct alg
    function sortHandler(arr:any){
        const alg = localStorage.getItem('algorithm')
        if('bubble'){
            const sorted = bubble(arr)
            setArray(sorted)
        }
        if('quickSort'){
            const sorted = quickSort(arr)
            setArray(sorted)
        }
        forceUpdate()
    }

    useEffect(()=>{
        const alg = localStorage.getItem('algorithm')
        if(alg === null){
            localStorage.setItem('algorithm', 'bubble')
        }
    },[])

    return(
        <StyledSection>
            <StyledBtn onClick={() => regenerateArray(arrayPusher(randomNumberInRange(screenCalculation()))as any)}>GENERATE NEW ARRAY</StyledBtn>
            <label>Set the numbers of records</label>
            <SyledSelector defaultValue={array.length-1} onChange={(e) => handleChange(e.target.value)}>
                {arr ? arr.map((option:number, key:number) =>{
                    return <StyledOption value={option} key={key}>{option}</StyledOption>
                }): null}
            </SyledSelector>
            <StyledBtn onClick={() => sortHandler(array)as any} >Sort</StyledBtn>
            <label>Sorting Algorithm </label>
            <SyledSelector defaultValue={localStorage.getItem('algorithm') as any} onChange={(e) => sortTypeHandler(e.target.value)}>
                <option value={'bubble'}>bubble</option>
                <option value={'quickSort'}>quickSort</option>
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