import { contexto } from "./CartContext"
import CarritoLista from "./CarritoLista"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import {db} from "../firebase"
import {collection, addDoc} from "firebase/firestore"
import { toast } from "react-toastify"



const Carrito = () => {

  const {precio_total, carrito, removeItem, cantidad_total, clearCart} = useContext(contexto)
  const [idCompra, setIdCompra] = useState("")
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")

  const handleNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleDireccion = (e) => {
    setDireccion(e.target.value)
  }

  const handleTelefono = (e) => {
    setTelefono(e.target.value)
  } 

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const deleteitem = (id) => {
    removeItem(id)
  }

  const navigate = useNavigate()

  const handleHome = () => {
  
    navigate('/')

  }

  const guardarCompra = () => {

    const usuarioNombre = nombre === "" ? "Default Nombre" : nombre
    const usuarioDireccion = direccion === "" ? "Default Direccion" : direccion
    const usuarioTelefono = telefono === "" ? "123456" : telefono
    const usuarioEmail = email === "" ? "test@test.com" : email

    const comprasColletion = collection(db,"compras")

    const compra = {
      buyer : {
        name : usuarioNombre,
        phone : usuarioTelefono,
        email : usuarioEmail,
        direccion : usuarioDireccion
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
    .catch((error)=>{
      toast.error(error.message)
    }) 

  }

return(
  cantidad_total>0 
  ?<div>
    <div><h1>Carrito</h1></div>
    <CarritoLista carrito={carrito} deleteitem={deleteitem}/>
    <h1>Precio total: ${precio_total}</h1>
  
    <div>
      <h3>Agrega los siguientes datos para la entrega de tu pedido, de lo contrario tendrás que pasar a recogerlo a tu sucursal mas cercana con tu número de orden:</h3>
      <p>Nombre: <input type="text" onChange={handleNombre}/></p>
      <p>Dirección: <input type="text" onChange={handleDireccion}/></p>
      <p>Teléfono: <input type="text" onChange={handleTelefono}/></p>
      <p>email: <input type="text" onChange={handleEmail}/></p>
    </div>
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
    

)


 
}

export default Carrito