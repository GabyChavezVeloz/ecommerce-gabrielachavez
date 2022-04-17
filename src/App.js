import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import ItemListContainer from "./component/ItemListContainer"

const App = () => {
    //return "Hola Mundo App Exportada!";
    //return <p> Hola Mundo </p>
    return (
        <>
            <Header/>
            <Main/>
            <ItemListContainer greeting="Hola, bienvenido a mi tienda!"/>
            <Footer/>
        </>
     )
   
   
}

export default App;