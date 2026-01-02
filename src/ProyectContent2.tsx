import type React from "react";

export default function ProyectarContenido2(props: ProyectarContenido2){
    return(
        <>
        {props.parteSuperior}
        <hr/>
        {props.parteIntermedia}
        <hr/>
        {props.parteInferior}
        </>
    )

}

interface ProyectarContenido2{
    parteSuperior: React.ReactNode,
    parteIntermedia: React.ReactNode,
    parteInferior: React.ReactNode
}