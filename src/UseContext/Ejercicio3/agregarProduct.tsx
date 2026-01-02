import { useContext, useState } from "react";
import { CarritoContext } from "./carritoContext";

export default function AgregarProductCart(){

    const carrito = useContext(CarritoContext)
    const[nombreProduct, setNombreProduct] = useState("")

    const envio = () =>{
        carrito?.agregarProducto(nombreProduct)
        setNombreProduct("")
    }

    const limpair = () =>{
        carrito?.producto.pop()
    }

    return(
        <div style={{padding: '20px'}}>
            <h1>Tu lista de productos</h1>
            <ul>
                {carrito?.producto.map((p, index) => (
                    <li key={index}>{p}</li>
                ))}
            </ul>

            <hr/>

            <input
            type="text"
            placeholder="escriba su producto"
            value={nombreProduct}
            onChange={(e) => setNombreProduct(e.target.value)}
            />

            <button onClick={envio}>Agregar Carrito</button>

            <button onClick={limpair}>eliminar carrito</button>

        </div>
    )

}


        
    



