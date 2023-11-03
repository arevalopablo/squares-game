import React from 'react'
import './randomColor.css'
import Cuadrado from '../cuadrado/Cuadrado'

export const RandomColor = (props) => {
    const {randomDiv, randomColor} = props

    if (randomDiv) {
        return (
            <div className='randomDiv'>
                <Cuadrado width={'40px'} height={'40px'} background={randomColor} border={'1px solid #000'}/>
            </div>
        )
    }



  return (
    <div className='div-paragraph'>
        <p className='paragraph-color'>Please select your colors</p>
    </div>
  )
}
