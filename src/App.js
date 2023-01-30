import React from "react"
import Graphbox from "./Component/Graphbox";
import {BrowserRouter , Routes,Route} from "react-router-dom"
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Error from "./Error";
// import StockPage from "./Component/StockPage";
import StockBox from "./Component/StockBox";
// import main_page from "./Component/main_page";
function App() {
  return (

    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<StockBox/>} exact />
       <Route path="/coins/:id" element={<Graphbox/>}/>
     </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
