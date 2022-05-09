import { useState } from "react"
import ItemCount from "./ItemCount"
import { useNavigate } from "react-router-dom"


const ItemDetail =({item}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/carrito`)

  }

  const [count, setCount] = useState(0)

  const onAdd =(contador) =>{
    console.log("Productos a comprar: "+contador)
    setCount(contador)
  }

  if(count >0){
    return (
      <>
          <div className="detail">
              <p><img src={item.pictureUrl}/></p>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>Precio: {item.price}</p>
              <p>Categorias : {item.category.map(category=>{
                return <span>{category}</span>
              })} </p>
              <p>Stock: {item.stock}</p>
              <button onClick={handleClick}>Terminar compra </button>
          </div>
          
      </>
    )
  }else{
    return (
      <>
          <div className="detail">
              <p><img src={item.pictureUrl}/></p>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>Precio: {item.price}</p>
              <p>Categorias : {item.category.map(category=>{
                return <span>{category}</span>
              })} </p>
              <p>Stock: {item.stock}</p>
              <ItemCount init={1} stock={item.stock} onAdd={onAdd}/>
          </div>
          
      </>
    )
  }

  
}

export default ItemDetail