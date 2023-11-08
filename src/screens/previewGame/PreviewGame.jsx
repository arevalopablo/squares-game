import React from 'react'
import Title from '../../shared/titulo/Title'
import CheckboxWrapper from '../../components/checkbox/CheckboxWrapper'
import Boton from '../../shared/boton/Boton'

const PreviewGame = (props) => {
  const {colores, toggle, squares, onClick, handleAddAll, handleRemoveAll} = props

  return (
    <div>
        <Title title/>
        <p style={{textAlign: 'center', margin: '30px 0', fontWeight: 'bold'}}>Please select your colors</p>
        <p style={{textAlign: 'center', margin: '30px 0', fontWeight: 'bold'}}>Selected colors: {squares.length}</p>
        <CheckboxWrapper colores={colores} toggle={toggle} squares={squares}/>
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
          <Boton botonText={'Start Game'} onClick={onClick}/>
          <Boton botonText={'Select All'} onClick={handleAddAll}/>
          <Boton botonText={'Remove All'} onClick={handleRemoveAll} disabled={squares.length < 1}/>
        </div>
        
    </div>
  )
}

export default PreviewGame