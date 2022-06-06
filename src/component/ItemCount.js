import { useState} from "react"

const ItemCount =({init, stock, onAdd}) => {

    const [contador, setContador] = useState(init)

    const sumar = () => {
        if(contador < stock){
         setContador(contador+1)
        }
     
    }
 
    const restar = () => {
     if(contador > 0){
         setContador(contador-1)
        }
     
 }
 
 const confirmar = () => {
     if(contador<=stock){
        onAdd(contador)
     }
     
    
 }

  return (
    <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={restar} className="material-icons">remove</button>
        <button onClick={confirmar}>Agregar al carrito</button>
        <button onClick={sumar} className="material-icons">add</button>
        
    </div>
  )
}

export default ItemCount