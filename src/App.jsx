//TODO OK--------------------
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () =>{
 return(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/catalogue" element={<ItemListContainer/>}/>
      <Route exact path="/category/:category" element={<ItemListContainer/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
 );
}

export default App
