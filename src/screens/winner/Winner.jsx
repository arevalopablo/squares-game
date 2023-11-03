import React from 'react'
import winner from '../../assets/winner.png'
import './winner.css'
import Boton from '../../shared/boton/Boton'

const Winner = (props) => {
  const {onClick} = props
  
  return (
    <>
        <div className='winner-container'>
            <img src={winner} alt='winner'/>
        </div>
        <Boton botonText={'Restart Game'} onClick={onClick}/>
    </>
    
  )
}

export default Winner