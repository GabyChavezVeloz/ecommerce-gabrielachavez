import { Routes , Route } from "react-router-dom"
import ItemListContainer from "./component/ItemListContainer"
import ItemDetailContainer from "./component/ItemDetailContainer"
import Carrito from "./component/Carrito"

const Main = () => {
  return (
    <>
      <main>
        {/* <ItemListContainer greeting="Hola, bienvenido a Cat Shoes!"/>
        <ItemDetailContainer/> */}

        <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola, bienvenido a Cat Shoes!"/>}/>
        <Route path="/category/:id" element={<ItemListContainer greeting="Hola, bienvenido a Cat Shoes!"/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
    
      </Routes>
      </main>
    </>

  )
}

export default Main
