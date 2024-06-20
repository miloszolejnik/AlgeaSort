import styled from "styled-components"

function Nav(){
    return(
        <StyledHeader>
            <h1>Algea-Sort</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: rgb(249, 253, 250);
    padding: 1rem 1rem 1rem 1rem;
    font-size: x-small;
    font-family: "Lobster Two", sans-serif;
    font-weight: 400;
    font-style: normal;
    box-shadow: 1px 1px 30px -1px rgba(0,0,0,0.49);
    -webkit-box-shadow: 1px 1px 30px -1px rgba(0,0,0,0.49);
    -moz-box-shadow: 1px 1px 30px -1px rgba(0,0,0,0.49);
`

export default Nav