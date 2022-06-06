import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import MiCustomProvider from "./component/CartContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



const App = () => {
    return (
      
        <BrowserRouter>
            <MiCustomProvider>
                <Header/>
                <Main/>
                <Footer/>
            </MiCustomProvider>
            <ToastContainer/>
        </BrowserRouter>
            
    
     )
   
   
}

export default App;