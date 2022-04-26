import Item from "./Item"

const ItemList = ({productList}) => {

  return (
    <>
      
      <ul>
        {productList.map((producto,indice)=>{
         return <Item key={producto.id} producto={producto}/>
        })}
      </ul> 
     
  
  </>
  )
}

export default ItemList