import { useNavigate } from "react-router-dom"

const Item = ({producto}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/producto/${producto.id}`)

  }

  return (
    <>
      <div className="card">
        <p>{producto.title}</p>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
        <p><img src={producto.pictureUrl}/></p>  
        <p>Categorias : {producto.category.map(category=>{
        return <span>{category}</span>
      })} </p>
        <button onClick={handleClick}>Detalles...</button>
      </div>  
            
            
        
    </>
  )
}

export default Item