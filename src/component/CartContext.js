import { createContext, useState} from "react";

export const contexto = createContext()
const {Provider} = contexto

const MiCustomProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidad_total] = useState(0)
    const [precio_total, setPrecio_total] = useState(0)

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCarrito([...carrito, {item,quantity}])
            setPrecio_total(precio_total + (item.price * quantity))
            setCantidad_total(cantidad_total + quantity)
        }else{
            console.log("El producto ya esta en el carrito!")
        }
    }

    const removeItem = (itemId) => {
        let item = getItem (itemId)

        setPrecio_total(precio_total - (item.item.price * item.quantity))
        setCantidad_total(cantidad_total - item.quantity)

        setCarrito(carrito.filter(item=>item.item.id!==itemId))

    }

    const clearCart = () => {
        setCarrito([])
        setCantidad_total(0)
        setPrecio_total(0)
    }

    const isInCart = (id) => {
        let result = carrito.find((item) => item.item.id === id)
        if(result !== undefined){
            return true
        }else{
            return false
        }
    }

    const getItem = (id) => {
        return carrito.find((item) => item.item.id === id)
    }

    const valorDelContexto = {
        cantidad_total,
        precio_total,
        carrito,
        addItem,
        removeItem,
        clearCart,
        isInCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
      )
}

export default MiCustomProvider;