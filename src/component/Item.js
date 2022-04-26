const Item = ({producto}) => {

  return (
    <>
        <li>
            <p>{producto.title}</p>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <p><img src={producto.pictureUrl}/></p>
            
        </li>
    </>
  )
}

export default Item