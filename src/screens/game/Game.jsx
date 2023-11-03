import React from 'react'
import Title from '../../shared/titulo/Title'
import { RandomColor } from '../../components/random/RandomColor'
import MainBoard from '../../components/mainBoard/MainBoard'

const Game = (props) => {
    const {randomColor, colores, onClick} = props
    

  return (
    <div>
        <Title/>
        <RandomColor randomDiv randomColor={randomColor}/>
        <MainBoard colores={colores} onClick={onClick}/>
    </div>
  )
}

export default Game