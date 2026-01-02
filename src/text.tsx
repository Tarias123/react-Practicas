export default function MostrarText(props: MostrarTextProps){
    return(
        <>
        <div>
            <p>Has Escrito: {props.texto}</p>
        </div>
        </>
    )
}

interface MostrarTextProps{
    texto: string;
}