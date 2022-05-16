import { contexto } from "./CartContext"
import CarritoLista from "./CarritoLista"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"



const Carrito = () => {

  const {precio_total, carrito, removeItem, cantidad_total} = useContext(contexto)

  const deleteitem = (id) => {
    removeItem(id)
  }

  const navigate = useNavigate()

  const handleHome = () => {
  
    navigate('/')

  }

return(
  <>
  {cantidad_total>0 
  ?<>
    <div><h1>Carrito</h1></div>
    <CarritoLista carrito={carrito} deleteitem={deleteitem}/>
    <h1>Precio total: ${precio_total}</h1>
  </> 
  
  :<>
    <div><h1>Carrito Vacio!</h1></div>
    <button onClick={handleHome}>Empezar a comprar!</button>
  </>
}
</>
)


 
}

export default Carrito