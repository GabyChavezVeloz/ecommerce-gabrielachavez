const Item = ({producto}) => {

  return (
    <>
      <div className="card">
        <p>{producto.title}</p>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
        <p><img src={producto.pictureUrl}/></p>  
      </div>  
            
            
        
    </>
  )
}

export default Item