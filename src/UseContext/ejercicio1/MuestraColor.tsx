import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export function MostrarColor(){
    const Color = useContext(ColorContext)

    return(
        <>
        <div>
            <h1>Tu color favorito</h1>
            <p>Este es tu color favorito: {Color?.colorfavorito}</p>
            <button onClick={() =>Color?.cambiarColor('azul')}>Cambiar a azul</button>
            <button onClick={() =>Color?.cambiarColor('verde')}>Cambiar a verde</button>
        </div>
        </>
    )
}