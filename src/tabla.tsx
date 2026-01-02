import { useState } from "react";
import type Persona from "./persona.mode";
import Fila from "./filas";

export default function Tabla(){
    const personasFuente: Persona[] = [
        {id: 1, nombre: 'felipe', departmento: 'ingeneria'},
        {id: 2, nombre: 'Victor', departmento: 'Administracion'},
        {id: 3, nombre: 'Angel', departmento: 'ingeneria'},
        {id: 4, nombre: 'Roberto', departmento: 'Desarrollo'},
        {id: 5, nombre: 'Antonio', departmento: 'Operaciones'},
        {id: 6, nombre: 'Paco', departmento: 'Contabilidad'},
    ];

    const [ personas, setPersonas] = useState(personasFuente)
    const removePerson = (persona: Persona) =>{
        setPersonas(
            personas.filter(p => p.id !== persona.id)
        )
    }
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Botones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map( p => <Fila key={p.id} persona={p} remover={removePerson}/> )}
            </tbody>
        </table>
        </>
    )
}