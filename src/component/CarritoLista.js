import CarritoItem from "./CarritoItem"
import { memo } from "react"

const CarritoLista = ({carrito, deleteitem}) => {
    return (
        <ul>
            {carrito.map(item=>{
                return <CarritoItem key ={item.item.id} item={item} deleteitem={deleteitem}/>
            })}
        </ul>
      
    )
  
}

export default memo(CarritoLista)