import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {db} from "../firebase"
import {collection, getDocs, query, where} from "firebase/firestore"
import { toast } from "react-toastify"

const ItemListContainer = ({greeting}) => {

  const [cargando,setCargando] = useState(true)
  const [productos, setProductos] = useState([])
  const {id} = useParams()


    useEffect(() =>{

      const productosCollection = collection(db,"productos")
      let consulta

      if(id===undefined){
        
        consulta = getDocs(productosCollection)
        
      }else{

        const filtro = query(productosCollection, where("category","array-contains",id))
        consulta = getDocs(filtro)

      }

      consulta
          .then((resultado)=>{
        
            const productos = resultado.docs.map(doc=>{
              const productoConId = doc.data()
              productoConId.id = doc.id
              return productoConId
            })
        
          setProductos(productos)
          setCargando(false)
          })
          .catch((error)=>{
            toast.error(error.message)
          })

      
    }, [id])

    if(cargando){
      return (
        <div><p>Cargando..</p></div>
      )
    }else{
      return (
        <>
    
            <div>
              <h2>{greeting}</h2>
            </div>
            <ItemList productList={productos}/>
    
        </>
        
      )
    }

}

export default ItemListContainer