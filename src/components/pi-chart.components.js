import React from 'react'
import styled from 'styled-components'

function PiChart({curValue}) {
    const handleDegConversion = (percent) => {
        return 360*(percent/100); //degrees
    }
    const handleColorConversion = (percent) => {
        const red = 255 - (percent/100)*255;
        const green = (percent/100)*255;
        return `rgb(${red}, ${green}, 0)`
    }
  return (
    <Styles deg = {handleDegConversion(curValue)} color={handleColorConversion(curValue)}>
        <div className='pi' >
        </div>
    </Styles>
  )
}

const Styles = styled.div`
    .pi{
        width:100px;
        height:100px;
        border-radius:200px;
        background: ${(props) => {
            console.log(props)
            return`conic-gradient( ${props.color} ${props.deg}deg, #eee ${props.deg}deg ${320}deg);`
        }};
    }
`

export default PiChart