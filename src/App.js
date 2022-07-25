import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Lista de Productos"/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por categoría"/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>       
      </BrowserRouter>    
    </div>
  );
}

export default App;
