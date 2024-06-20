import './App.css';
import styled from 'styled-components';
import Nav from './components/Nav';
import AlgorythmDisplay from './components/AlogorythmDisplay';
import OptionsForm from './components/OptionsForm';
import { useState, createContext } from 'react';

export const ArrayContext = createContext({})

function App() {

  const [array, setArray] = useState([]) as any;

  return (
    <StyledApp className="App">
      <ArrayContext.Provider value={{array: array, setArray: setArray}}>
        <Nav />
        <AlgorythmDisplay />
        <OptionsForm />
      </ArrayContext.Provider>
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
