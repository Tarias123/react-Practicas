import { createContext, useState, type ReactNode } from "react";

export default interface ColorTheme{
    tema: string,
    cambiarTheme: (camTema: string) => void;
}


export const colorThemeContext = createContext<ColorTheme | undefined>(undefined);

export function CambiarTheme({children}: {children: ReactNode}){

    const[color, setColor] = useState('claro')

    return(
        <colorThemeContext.Provider value={{tema: color, cambiarTheme: setColor}}>
            {children}
        </colorThemeContext.Provider>
    )
}
