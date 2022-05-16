

const CarritoItem = ({item, deleteitem}) => {

    const handlerDelete = () => {
        deleteitem(item.item.id)
    }

  return (
    <div className="cartList">
        <div className="cartItem"><img className="cartImg" src={item.item.pictureUrl}/></div>
        <div>
            <h3>{item.item.title}</h3>
            <p>{item.item.description}</p>
            <p>Precio: ${item.item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={handlerDelete}>Eliminar</button>
        </div>

    </div>
  )
}

export default CarritoItem