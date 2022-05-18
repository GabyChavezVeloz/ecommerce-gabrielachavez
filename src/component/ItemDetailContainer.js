import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {db} from "../firebase"
import { getDoc, doc, collection} from  "firebase/firestore"

const ItemDetailContainer =() => {

  const [item, setItem] = useState([])
  const {id} = useParams()
  const [cargando,setCargando] = useState(true)

    useEffect(() =>{

        const productosCollection = collection(db,"productos")
        const resultadoDelDoc = doc(productosCollection, id)
        const consulta = getDoc(resultadoDelDoc)
        
        consulta  
          .then((resultado) => {
            const data = resultado.data()
            data.id=resultado.id;
            setItem(data)
            setCargando(false)
          })
          .catch((error) => {
            console.log(error)
            setCargando(false)
          })
    })

    if(cargando){
      return (
        <p>Cargando...</p>
      )
    } else{
      return(
     
        <ItemDetail item={item}/>
      )
    }

}

export default ItemDetailContainer