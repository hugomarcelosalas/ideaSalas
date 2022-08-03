import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContex from "./Context/cartContext";
import Cart from "./components/Cart/Cart";

const App = () => {
    return (
        <div className="App">
            <CartContex>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <ItemListContainer greeting="Lista de Productos" />
                            }
                        />
                        <Route
                            path="/category/:categoryId"
                            element={
                                <ItemListContainer greeting="Productos por categoría" />
                            }
                        />
                        <Route
                            path="/item/:productId"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </CartContex>
        </div>
    );
};

export default App;