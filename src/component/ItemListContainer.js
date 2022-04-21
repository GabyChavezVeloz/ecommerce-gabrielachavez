import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {

  const onAdd =(contador) =>{
    console.log("Productos a comprar: "+contador)
  }

  return (
    <>
      <main>
        <div>{greeting}</div>
        <ItemCount stock={10} init={1} onAdd={onAdd}/>
      </main>
      
    </>
    
  )
}

export default ItemListContainer