import React from 'react'
import './boton.css'

const Boton = (props) => {
  const {botonText, onClick} = props
  return (
    <div className='div-start'>
        <button className='start-btn-style' onClick={onClick}>{botonText}</button>
    </div>
  )
}

export default Boton