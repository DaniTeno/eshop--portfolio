import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { useReducer } from "react";
import { shopInitialState, shopReducer } from "./reducer/shopReducer";
import { SHOP_TYPES } from "./actions/shopActions";

function App() {
    const [state, dispatch] = useReducer(shopReducer, shopInitialState);

    const addToCart = (data) => {
        dispatch({type: SHOP_TYPES.ADD_TO_CART, payload: data})
    }
    const removeOne = (data) => dispatch({type: SHOP_TYPES.REMOVE_1, payload: data});
    const removeAllTypes = (data) => dispatch({type: SHOP_TYPES.REMOVE_ALL_TYPES, payload: data});
    const clearCart = () => dispatch({type: SHOP_TYPES.CLEAR_CART});

    return (
        <HashRouter>
            <div className="App">
                <Header title={"eShop"} cart={state.cart} />
                <section className='principal-screen'>
                    <Routes>
                        <Route path='/products/*' element={<Products addToCart={addToCart} />} />
                        <Route exact path='/cart' element={<Cart cart={state.cart} actions={[removeOne, removeAllTypes, clearCart]} />}/>
                        <Route exact path='/' element={<Home addToCart={addToCart} />}/>
                    </Routes>
                </section>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
