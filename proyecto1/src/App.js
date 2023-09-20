import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './Components/CartWidget/CartWidget';
import Error from './Components/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path={"/cart"} element = {<CartWidget/>}/>
        <Route path="*" element = {<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
