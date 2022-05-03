import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import abril from "./abril.png"
import tenis from "./tenisKitty.png"
import botas from "./powerKitty.png"
import sidney from "./sidney.png"
import { useParams } from "react-router-dom"


const productList = [
  {
    id: 1,
    title:"Abril",
    description: "Bonitos zapatos tipo flats en color negro con cara de gato y bigotes dorados, con comoda plantilla",
    price: 100,
    category: ["flats","cat"],
    pictureUrl:abril
  },
  {
    id: 2,
    title:"Tenis Kitty",
    description: "Comodos y bonitos tenis con estampado de Kitty y suela ancha",
    price: 200,
    category: ["comodos","kitty"],
    pictureUrl: tenis
  },
  {
    id: 3,
    title:"Power Kitty",
    description: "Bonitas botas en color negro con estampado de Kitty, se pueden combinar con todo!",
    price: 300,
    category: ["comodos","kitty"],
    pictureUrl: botas
  },
  {
    id: 4,
    title:"sidney",
    description: "Bonitos zapatos tipo flats en color beige con cara de gato, con comoda plantilla",
    price: 400,
    category: ["flats","cat"],
    pictureUrl: sidney
    }
  ]



const ItemDetailContainer =() => {

  const [item, setItem] = useState([])
  const {id} = useParams()
  const [cargando,setCargando] = useState(true)

  const getItem = new Promise((res)=>{
    setTimeout(()=>{
      const resultado = productList.filter((producto)=>{
        return producto.id == id
      })[0]
      res(resultado)
    }, 2000)
  })

    useEffect(() =>{
        getItem
            .then((item)=>{
              setItem(item)
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