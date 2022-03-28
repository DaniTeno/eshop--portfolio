import React from 'react'
import { Link } from 'react-router-dom'
import { SearchInput } from './SearchInput'

export const Header = ({title, cart}) => {
    let itemsInCart = 0
    cart.forEach(item => {
        itemsInCart= item.quantity + itemsInCart
    });
    return (
        <header className='header'>
            <Link to="/"><h1>{title}</h1></Link>
            <nav>
                <div className='section-btn'>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/products"><button>Products</button></Link>
                    <Link to="/cart"><button>Cart: {itemsInCart}</button></Link>
                </div>
                <SearchInput />
            </nav>
        </header>
    )
}
