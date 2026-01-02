import { useState } from 'react';
import Cabecera from './Cabezera';
import MostrarText from './text';


export default function EjemploEstado() {
  console.log('renderizando componentes react')

  const [texto, setTexto] = useState('');

  const clickeo = () => alert('clickeaste')


  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setTexto(e.currentTarget.value)}

  return(
    <>
    <Cabecera/>

    <button onClick={clickeo}>Clickeame</button>
    <div>
    <input onKeyUp={(e => manejarKeyUp(e))}/>
    </div>
    <MostrarText texto={texto} />
    <Cabecera/>
    </>
  );
}


