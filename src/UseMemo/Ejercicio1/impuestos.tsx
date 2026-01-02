import { useMemo, useState } from "react";

export default function Precio() {
    const [precios] = useState([100, 200, 300, 400, 500]);
    const [contador, setContador] = useState(0); // Cambiamos el nombre para que sea claro

    const totalConImpuesto = useMemo(() => {
        console.log("Calculando total pesado..."); // Verás esto solo al inicio
        const sumaTotal = precios.reduce((acumulado, p) => acumulado + p, 0);
        return sumaTotal * 1.18;
    }, [precios]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Cálculo de Precios</h1>
            
            {/* 1. Este input "molesta" al componente para probar useMemo */}
            <p>Veces que has escrito/clickeado: {contador}</p>
            <input 
                type="number"
                value={contador}
                onChange={(e) => setContador(Number(e.target.value))} 
            />

            <hr />

            <h3>Lista de Precios Base:</h3>
            <ul>
                {precios.map((p, index) => (
                    <li key={index}>S/ {p}</li>
                ))}
            </ul>

            {/* 2. Mostramos el resultado memorizado */}
            <h2>Total (con IGV 18%): S/ {totalConImpuesto}</h2>
        </div>
 
);
}