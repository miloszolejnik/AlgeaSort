import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import AlgorythmDisplay from './components/AlogorythmDisplay';
function App() {
  return (
    <StyledApp className="App">
      <Nav />
      <AlgorythmDisplay />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(249, 253, 250);
  color: rgb(4, 7, 4);
`

export default App;
