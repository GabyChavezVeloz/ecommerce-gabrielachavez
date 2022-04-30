import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import img from "./box.png"
import { useEffect, useState } from "react"

const productList = [
    {
      id: 1,
      title:"producto title 1",
      description: "producto 1",
      price: 100,
      pictureUrl: img
    },
    {
      id: 2,
      title:"producto title 2",
      description: "producto 2",
      price: 200,
      pictureUrl: img
    },
    {
      id: 3,
      title:"producto title 3",
      description: "producto 3",
      price: 300,
      pictureUrl: img
    },
    {
      id: 4,
      title:"producto title 4",
      description: "producto 4",
      price: 400,
      pictureUrl: img
      }
  ]

   const promesa = new Promise((res)=>{
    setTimeout(()=>{
        res(productList)
    }, 2000)
})

const ItemListContainer = ({greeting}) => {

  const onAdd =(contador) =>{
    console.log("Productos a comprar: "+contador)
  }

  const [productos, setProductos] = useState([])

    useEffect(() =>{
        promesa
            .then((productList)=>{
                setProductos(productList)
            })

    
    })

  return (
    <>

        <div>
          <h2>{greeting}</h2>
        </div>
        {/* <ItemCount stock={10} init={1} onAdd={onAdd}/> */}
        <ItemList productList={productList}/>

    </>
    
  )
}

export default ItemListContainer