import { createContext, useState, type ReactNode } from "react";

export default interface Productos{
    producto: string[];
    agregarProducto: (addProduct: string) => void;
}

export const CarritoContext = createContext<Productos | undefined>(undefined);


export function Carrito({children}: {children: ReactNode}){

    const[productos, setProductos] = useState<string[]>([])
    const añadir = (newProduct : string) => {setProductos([...productos, newProduct])}

    return(
        <CarritoContext.Provider value={{producto: productos, agregarProducto: añadir}}>
            {children}
        </CarritoContext.Provider>
    )
}