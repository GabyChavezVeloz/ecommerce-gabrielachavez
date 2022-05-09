import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import MiCustomProvider from "./component/CartContext"



const App = () => {
    //return "Hola Mundo App Exportada!";
    //return <p> Hola Mundo </p>
    return (
        <>
            <BrowserRouter>
                <MiCustomProvider>
                    <Header/>
                    <Main/>
                    <Footer/>
                </MiCustomProvider>
            </BrowserRouter>
            
        </>
     )
   
   
}

export default App;