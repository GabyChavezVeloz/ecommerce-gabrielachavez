import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {db} from "../firebase"
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = ({greeting}) => {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {id} = useParams()

  const productosCollection = collection(db,"productos")

    useEffect(() =>{

      if(id==undefined){
        
        const consulta = getDocs(productosCollection)
        consulta
          .then((resultado)=>{
        
            const productos = resultado.docs.map(doc=>{
              const productoConId = doc.data()
              productoConId.id = doc.id
              return productoConId
            })
        
          setProductos(productos)
          setLoading(false)
          })
          .catch((error)=>{
            console.log(error)
          })
      }else{

        const filtro = query(productosCollection, where("category","array-contains",id))
        const consulta = getDocs(filtro)

        consulta
          .then((resultado)=>{
        
            const productos = resultado.docs.map(doc=>{
              const productoConId = doc.data()
              productoConId.id = doc.id
              return productoConId
            })
        
            console.log(productos.data)
          setProductos(productos)
          setLoading(false)
          })
          .catch((error)=>{
            console.log(error)
          })
      }

      
    }, [id])

    if(loading){
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