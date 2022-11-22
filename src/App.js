import styled from 'styled-components';
import PiChart from './components/pi-chart.components';
import './App.css'
import Slider from './components/slider.components';
import react, {useState} from 'react';

const Styles = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
min-height:100vh;
`


function App() {
  const [value, setValue] = useState(0);
  const handleChange = (newVal) => {
    setValue(newVal)
  }

  return (
    <Styles>
      <PiChart curValue={value}/>
      <Slider curValue ={value} onChange={handleChange}/>
    </Styles>
  );
}

export default App;
