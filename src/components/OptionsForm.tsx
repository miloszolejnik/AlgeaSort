import styled from "styled-components"

function OptionsForm(){
    return(
        <StyledSection>
            <button>Generate random array!</button>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`

export default OptionsForm