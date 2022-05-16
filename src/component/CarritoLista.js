import CarritoItem from "./CarritoItem"

const CarritoLista = ({carrito, deleteitem}) => {
    return (
        <ul>
            {carrito.map(item=>{
                return <CarritoItem key ={item.item.id} item={item} deleteitem={deleteitem}/>
            })}
        </ul>
      
    )
  
}

export default CarritoLista