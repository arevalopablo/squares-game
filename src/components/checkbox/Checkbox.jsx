import React from 'react'
import './checkbox.css'
import Square from '../square/Square'
import { isCheck } from '../helper'

const Checkbox = (props) => {
    const {color, toggle, squares} = props
  
  return (
    <div className='checkContainer'>
        <input style={{accentColor: color.background}} type="checkbox" onChange={() => toggle(color)} checked={isCheck(squares, color)}/>
        <p style={{fontWeight: 'bold', width: '85px'}}>{color.background}</p>
        <Square width={'28px'} height={'28px'} background={color.background} border={'1px solid #000'}/>
    </div>
  )
}

export default Checkbox