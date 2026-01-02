import { useMemo, useState } from "react"

export default function EjemploMemorizar(){

    const [number, setNumero] = useState(1);
    const [nombre, setNombre] = useState("")

    const factorial = useMemo (() =>{
        console.log('calculando factorial');
        let resultado = 1;
        for(let i = 1; i <= number; i++){ 
            resultado = resultado*i;
        }
        return resultado
    }, [number])

    return (
        <>
        <p>Calcular El factorial de <input type="number" onChange={e => setNumero(Number(e.target.value))}/></p>

        <p>El factorial de {number} es {factorial} </p>

        <p>nombre: <input type="text" onChange={e => setNombre(e.target.value)} /></p>
        <p>Hola, {nombre}</p>
        </>        
    )
}