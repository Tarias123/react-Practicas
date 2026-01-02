import { useEffect, useState } from "react"

export default function EjemploUseEffect(){

    const[clicks, setClicks] = useState(0);
    const[hora, setHora] = useState(new Date())

    useEffect (() => {
        console.log('El Componente ha cargado');
        return () => console.log('desmontando el componente');
    }, [])

    useEffect(() => {
        console.log('hool del click')
        document.title = `${clicks} veces`
    },[clicks])

    useEffect(() => {
        const TimerId = setInterval(() =>{
            setHora( new Date())
        }, 1000)
        return () => clearInterval(TimerId)
    })
    
    return (
        <>
            <h2>Ejemplo de UseEffect</h2>

            <div>
                <button onClick={() => setClicks(clicks + 1)}> me has clickeado {clicks} veces</button>
            </div>
            <div>
                <h3>La hora es {hora.toTimeString()}</h3>
            </div>
        </>
    )
    
}

