import React from 'react'
import './boton.css'

const Boton = (props) => {
  const {botonText, onClick, disabled} = props
  return (
    <div className='div-start'>
        <button className={`${disabled ? 'disabledButton start-btn-style' : 'start-btn-style'}`} onClick={onClick} disabled={disabled}>{botonText}</button>
    </div>
  )
}

export default Boton