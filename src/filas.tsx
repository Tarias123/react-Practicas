import type Persona from "./persona.mode";

export default function Fila({persona, remover}: FilaProps){
return(
    <>
        <tr key={persona.id}>
                    <td>{persona.nombre}</td>
                    <td>{persona.departmento}</td>
                    <td>
                        <button onClick = {() => remover(persona)}>
                            remover
                        </button>
                    </td>
        </tr>
    </>
)

}

interface FilaProps{
    persona : Persona
    remover: (p: Persona) => void;
}