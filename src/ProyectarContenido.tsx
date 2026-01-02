import type React from "react";

export default function ProyectarContenido(props: ProyectarContenido){
    return (
        <>
            <h3>Parte Superior</h3>
            {props.children}
            <h3>Parte Inferior</h3>
        </>
    )

}

interface ProyectarContenido{
    children: React.ReactNode
}