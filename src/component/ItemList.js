import Item from "./Item"

const ItemList = ({productList}) => {

  return (
    <>
      <div className="card-container">
        {productList.map((producto,indice)=>{
         return <Item key={producto.id} producto={producto}/>
        })}
      </div>
     
     
  
  </>
  )
}

export default ItemList