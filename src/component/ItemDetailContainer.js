import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import abril from "./abril.png"


const item = 
  {
    id: 1,
    title:"Abril",
    description: "Bonitos zapatos tipo flats en color negro con cara de gato y bigotes dorados, con comoda plantilla",
    price: 100,
    pictureUrl: abril
  }

const getItem = new Promise((res)=>{
  setTimeout(()=>{
      res(item)
  }, 2000)
})

const ItemDetailContainer =() => {

  const [item, setItem] = useState([])

    useEffect(() =>{
        getItem
            .then((item)=>{
              setItem(item)
            })

    
    })

  return (
    <>
    
        <ItemDetail item={item}/>
    
    </>
  )
}

export default ItemDetailContainer