import ItemListContainer from "./component/ItemListContainer"
import ItemDetailContainer from "./component/ItemDetailContainer"

const Main = () => {
  return (
    <>
      <main>
        <ItemListContainer greeting="Hola, bienvenido a Cat Shoes!"/>
        <ItemDetailContainer/>
      </main>
    </>

  )
}

export default Main
