export default function ContenidoDinamico(props: ContenidoDinamico){
    return(
        <div>
            {props.mostrarContenido ? <p>Mensaje Secreto</p>: undefined}
        </div>
    )

}


interface ContenidoDinamico {
    mostrarContenido: boolean
}