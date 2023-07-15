import './Estilos/App.css'
import { useState } from 'react'
import memeDato from "./mapaDatos/MapaDatos"

function App() {
    // Constante con los 2 estados de useState [inicial, estado de cambio]
    const [memeImage, setmemeImage] = useState({
      // Agregamos los valores del texto y la imagen a pasar
      toptext:"",
      bottomtext:"",
      memeImageRandom:"./assets/Meme1.png"
    })
    // El estado inicial del useState es el mapa de datos
    const [allMemeImages, setAllMemeImages] = useState(memeDato)
    // Funcion que se pasa entre los datos del mapa que contiene las imagenes de los memes
    
    
   
    function memeGenerador(){

    // Ingresa al mapa de datos y va al campo donde se encuentran los memes
    const meme = allMemeImages.data.memes

    // Const que genera un numero aleatorio que sea maximo al largo de datos que se contienen en el array 
    const randomNumber = Math.floor(Math.random() * meme.length)
    
    // Constante que genera un meme aleatorio
    const url = meme[randomNumber].url

    // En la variable donde el estado cambia metemos creamos una arrow funcion la cual pasa los parametros antes de memeImageRandom
    // 
    setmemeImage(prevMeme => ({
      ...prevMeme,
      memeImageRandom: url
    }))
  }


  function IngresaTexto(event){
    const{name,value} = event.target
    setmemeImage(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }


  return (
    <div className='contenedor--gral'>
    <header>
      <img 
            src='./assets/TrollFace.png'
            alt=''
            className='TrollFace'/>
      <b>MemeGenerator</b></header>
    <div className="contenido">
      <div className='contenido--form'>
      <input type="text" placeholder='Texto de arriba' className='entrada-dato' name='toptext' onChange={IngresaTexto} value={memeImage.toptext}/>
      <input type="text" placeholder='Texto de abajo' className='entrada-dato' name='bottomtext' onChange={IngresaTexto} value={memeImage.bottomtext}/>
      <button 
        className='boton-generador' 
        // Pasamos el nombre de la variable donde el estado cambio cuando se haga click
        onClick={memeGenerador}
        >
        Get a new meme image
      </button>
      </div>
      {/* Se pasa la variable principal del useState */}
      <div className='meme'>
      <img src={memeImage.memeImageRandom} alt='meme' className='meme--image'/> 
      <h2 className="meme--text top">{memeImage.toptext}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomtext}</h2>
      </div>
    </div>
    
    </div>
  )
}

export default App
