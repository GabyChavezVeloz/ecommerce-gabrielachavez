import { contexto } from "./CartContext"
import CarritoLista from "./CarritoLista"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import {db} from "../firebase"
import {collection, addDoc} from "firebase/firestore"



const Carrito = () => {

  const {precio_total, carrito, removeItem, cantidad_total, clearCart} = useContext(contexto)
  const [idCompra, setIdCompra] = useState("")

  const deleteitem = (id) => {
    removeItem(id)
  }

  const navigate = useNavigate()

  const handleHome = () => {
  
    navigate('/')

  }

  const guardarCompra = () => {
    const comprasColletion = collection(db,"compras")

    const compra = {
      buyer : {
        name : "Gaby",
        phone : "123456",
        email : "test@test.com"
      },
      items : carrito,
      date : Date.now(),
      total : precio_total
    }

   const consulta = addDoc(comprasColletion,compra)

    consulta
    .then((resultado)=>{
      setIdCompra(resultado.id)
      clearCart()
    })
    .catch((err)=>{
      console.log(err)
    }) 

  }

return(
  <>
  {cantidad_total>0 
  ?<div>
    <div><h1>Carrito</h1></div>
    <CarritoLista carrito={carrito} deleteitem={deleteitem}/>
    <h1>Precio total: ${precio_total}</h1>
    <button onClick={guardarCompra}>Pagar</button>
    {idCompra && <h3>Compra guardada con id: {idCompra}</h3>}
  </div>  
  :
  idCompra===""
  ?<div>
    <div><h1>Carrito Vacio!</h1></div>
    <button onClick={handleHome}>Empezar a comprar!</button>
  </div>
  :<div>
    <div><h3>Id de compra: {idCompra}</h3></div>
    <button onClick={handleHome}>Comprar de nuevo!</button>
  </div>
    
}
</>
)


 
}

export default Carrito