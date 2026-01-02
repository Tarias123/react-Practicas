import { createContext, useState, type ReactNode } from "react";


export default interface ColorData{
    colorfavorito:string;
    cambiarColor: (colornuevo: string) => void;
}

export const ColorContext = createContext<ColorData | undefined>(undefined)

export function ColorProvider({children} : {children: ReactNode}){
    const [color, setColor] = useState("rojo")

    return(
        <ColorContext.Provider value = {{colorfavorito: color,cambiarColor: setColor}}>
            {children}
        </ColorContext.Provider>
    )

}