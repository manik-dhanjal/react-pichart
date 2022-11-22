import React, {useRef} from 'react'
import styled from  'styled-components';

function Slider({onChange, curValue}) {
  const handleSlider = (e) => {
    onChange(e.target.value);
  }
  return (
    <Styles>
        <input type="range" value={curValue} onChange={handleSlider}/>
    </Styles>
  )
}


const Styles = styled.div`
    .line{
        width:300px;
        height:2px;
        background-color:grey;
    }
    .pointer{
        width:10px;
        height:10px;
        border-radius:20px;
        background-color:black;
        cursor:pointer;
    }
`

export default Slider