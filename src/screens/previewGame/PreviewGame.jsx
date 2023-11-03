import React from 'react'
import Title from '../../shared/titulo/Title'
import CheckboxWrapper from '../../components/checkbox/CheckboxWrapper'
import Boton from '../../shared/boton/Boton'

const PreviewGame = (props) => {
  const {colores, toggle, squares, onClick} = props

  return (
    <div>
        <Title title/>
        <p style={{textAlign: 'center', margin: '30px 0', fontWeight: 'bold'}}>Please select your colors</p>
        <p style={{textAlign: 'center', margin: '30px 0', fontWeight: 'bold'}}>Selected colors: {squares.length}</p>
        <CheckboxWrapper colores={colores} toggle={toggle}/>
        <Boton botonText={'Start Game'} onClick={onClick}/>
    </div>
  )
}

export default PreviewGame