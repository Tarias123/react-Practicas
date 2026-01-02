export default function ContenidoDinamicoIf(props: ContenidoDinamicoIf){
    let mensaje : string;
    
    if(props.calificacion <= 30){
        mensaje = 'calificacion mala'
    }else if(props.calificacion >= 30 && props.calificacion <= 60 ){
       mensaje = 'calificacion decente'
    } else{
        mensaje = 'calificacion Excelente'
    }
    
    return(
    <>
    <h1>Tu calificacion es </h1>
    <p>{mensaje}</p>
    </>)
}

interface ContenidoDinamicoIf{
    calificacion: number,
}