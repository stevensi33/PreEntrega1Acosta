import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greating = "Envíos gratis por compras a partir de $400.000"/>
    </div>
  );
}

export default App;
