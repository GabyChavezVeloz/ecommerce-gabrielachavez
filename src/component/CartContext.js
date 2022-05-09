import { createContext, useState} from "react";

export const contexto = createContext()
const {Provider} = contexto

const MiCustomProvider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidad_total] = useState(0)
    const [precio_total, serPrecio_total] = useState(0)

    const addItem = (item, quantity) =>{
        if(!isInCart(item.id)){
            setCarrito([...carrito, {item,quantity}])
        }else{
            console.log("El producto ya esta en el carrito!")
        }
    }

    const removeItem = (itemId) => {}

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        let result = carrito.find((item) => item.item.id === id)
        if(result !== undefined){
            return true
        }else{
            return false
        }
    }

    const valorDelContexto = {
        cantidad_total,
        precio_total,
        carrito,
        addItem,
        removeItem,
        clear,
        isInCart
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
      )
}

export default MiCustomProvider;