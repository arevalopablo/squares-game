  import React, { useEffect, useState } from 'react'
  import PreviewGame from '../../screens/previewGame/PreviewGame';
  import Game from '../../screens/game/Game';
  import Winner from '../../screens/winner/Winner';
  import Loader from '../../shared/loader/Loader';

  const Main = () => {
    const colores = "#FF0000 (Rojo),#00FF00 (Verde),#0000FF (Azul),#FFFF00 (Amarillo),#FF00FF (Magenta),#00FFFF (Cian),#FFA500 (Naranja),#800080 (Púrpura),#008000 (Verde oscuro),#800000 (Marrón),#000080 (Azul oscuro),#808080 (Gris),#FFD700 (Dorado),#A52A2A (Marrón rojizo),#2E8B57 (Verde mar),#7FFF00 (Verde amarillento),#4B0082 (Índigo),#8B008B (Magenta oscuro),#DC143C (Rojo carmesí),#4682B4 (Azul acero)";

    const resultado = colores.split(',').map((hexa) => {
        return hexa.split(' ')[0]
    }).map((color, index) => {
        return {
            id: `${index + 1}`,
            background: color
        }
    })
      
    const [colors, setColors] = useState(resultado)  
    const [randomColor, setRandomColor] = useState(null)
    const [squares, setSquares] = useState([])
    const [startGame, setStartGame] = useState(false)
    const [loader, setLoader] = useState(true)

    const colorAlAzar = () => {
      if (!squares.length) {    
        return null
      }
      const numeroAleatorio = Math.floor(Math.random() * squares.length)
      setRandomColor(squares[numeroAleatorio].background)
    }
      
    useEffect(() => {
      colorAlAzar()
    }, [squares])
    
    setTimeout(() => {
      setLoader(false)
    }, 3000);

    const toggle = (color) => {
      const siestaenelarray = squares.some((cuad) => cuad.id === color.id)

      if (!siestaenelarray) {
        setSquares([...squares, color])
      } else {
        setSquares(
          squares.filter((cuadrado) => cuadrado.background !== color.background)
        )
      }
    }

    const handleStartGame = () => {
      if (!squares.length) {  
      alert('Choose at least one color')
      } else {
        setStartGame(true)
      }
    }

    const restartGame = () => {
      setLoader(true)
      setStartGame(false)
    }

    const handleClick = (background) => {
      if (background === randomColor) {
        setSquares(squares.filter((cuadrado) => cuadrado.background !== background))
        
      } else {
        alert('You clicked on a different color')
        colorAlAzar()
      }
    }
      
    return (
      <div className='container'>
        {loader && <Loader colores={colors}/>}
        {!startGame && <PreviewGame colores={colors} toggle={toggle} squares={squares} onClick={handleStartGame}/>}
        {(startGame && squares.length > 0) && <Game randomColor={randomColor} colores={squares} onClick={handleClick}/>}
        {(startGame && squares.length < 1) && <Winner onClick={restartGame}/>}
        
      </div>
    )
  }

  export default Main