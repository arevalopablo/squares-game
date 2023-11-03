import React from 'react'
import Cuadrado from '../cuadrado/Cuadrado'
import './checkbox.css'

const Checkbox = (props) => {
    const {color, toggle} = props
  
  return (
    <div className='checkContainer'>
        <input style={{accentColor: color.background}} type="checkbox" onChange={() => toggle(color)}/>
        <p style={{fontWeight: 'bold', width: '85px'}}>{color.background}</p>
        <Cuadrado width={'28px'} height={'28px'} background={color.background} border={'1px solid #000'}/>
    </div>
  )
}

export default Checkbox