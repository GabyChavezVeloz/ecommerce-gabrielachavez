import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"



const App = () => {
    //return "Hola Mundo App Exportada!";
    //return <p> Hola Mundo </p>
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
            
        </>
     )
   
   
}

export default App;