import React from 'react'
import './checkboxWrapper.css'
import Checkbox from './Checkbox'

const CheckboxWrapper = (props) => {
  const {colores, toggle} = props
  return (
    <div className='wrapper'>
      {colores.map((color) => (
        <Checkbox key={color.id} color={color} toggle={toggle}/>
      ))}
    </div>
  )
}

export default CheckboxWrapper