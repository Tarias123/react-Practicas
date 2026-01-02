import { useContext } from "react";
import { colorThemeContext } from "./themeContext";



export function CambiarTema(){
    const tema = useContext(colorThemeContext)
    
    const estiloFondo = {
    backgroundColor: tema?.tema === "claro" ? "#ffffff" : "#222222",
    color: tema?.tema === "claro" ? "#000000" : "#ffffff",
    minHeight: "100vh", // Esto hace que cubra toda la altura de la pantalla
    transition: "all 0.3s ease" // Para que el cambio sea suave y no brusco
  };

    return(
        <div style={estiloFondo}>
            <h1>El tema esta en {tema?.tema}</h1>
            <button onClick={() => tema?.cambiarTheme('oscuro')}> Cambiar a oscuro </button>
            <button onClick={() => tema?.cambiarTheme('claro')}> Cambiar a claro </button>
        </div>
    )

}