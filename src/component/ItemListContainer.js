import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import img from "./box.png"
import abril from "./abril.png"
import tenis from "./tenisKitty.png"
import botas from "./powerKitty.png"
import sidney from "./sidney.png"
import { useEffect, useState } from "react"
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

   

const ItemListContainer = ({greeting}) => {

  

  const onAdd =(contador) =>{
    console.log("Productos a comprar: "+contador)
  }

  const [productos, setProductos] = useState([])
  const {id} = useParams()

  const promesa = new Promise((res)=>{
    setTimeout(()=>{
      if(id==undefined){
        res(productList)
      }else{
        const cat = productList.filter((producto)=>{
          const result = producto.category.filter ((productCategory)=>{
            return productCategory == id
          })
          return result.length > 0
          
        })
        res(cat)
      }

        
    }, 2000)
  })

    useEffect(() =>{
        promesa
            .then((productList)=>{
                setProductos(productList)
            })

    
    }, [id])

  return (
    <>

        <div>
          <h2>{greeting}</h2>
        </div>
        {/* <ItemCount stock={10} init={1} onAdd={onAdd}/> */}
        <ItemList productList={productos}/>

    </>
    
  )
}

export default ItemListContainer