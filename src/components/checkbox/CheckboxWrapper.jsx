import React from 'react'
import './checkboxWrapper.css'
import Checkbox from './Checkbox'

const CheckboxWrapper = (props) => {
  const {colores, toggle, squares} = props
  return (
    <div className='wrapper'>
      {colores.map((color) => (
        <Checkbox key={color.id} color={color} toggle={toggle} squares={squares}/>
      ))}
    </div>
  )
}

export default CheckboxWrapper