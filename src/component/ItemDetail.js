const ItemDetail =({item}) => {

  return (
    <>
        <div className="detail">
            <p><img src={item.pictureUrl}/></p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>Precio: {item.price}</p>
        </div>
        
    </>
  )
}

export default ItemDetail