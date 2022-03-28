import { floatTwo } from "../helpers/floatTwo";


export const ProductItem = ({ data, classStyle, addToCart, removeOne, removeAllTypes, cart= null}) =>{
    const { name, url, desc, price, quantity } = data;

    return (
        <figure className={classStyle}>
            <img src={url} alt={name ? name : "N/A"}/>
            <figcaption className="product-description">
                <p><b>{name}</b></p>
                <p className="desc">{desc ? desc : 'No description'}</p>
                {!cart && <p className="price">{price ? price+' $' : 'no data'}</p>} 
            </figcaption>
            {cart && <p className="price"><b>({price ? price+' $' : 'no data'}</b>  x {quantity}) <b>{floatTwo(price * quantity)} $</b></p>} 
            <nav>
                {!cart && <button className="add-btn" id={name} onClick={() => addToCart(data)}>Add to cart</button>}
                {removeOne && <button className="add-btn" onClick={() => removeOne(data)}>Delete one</button>}
                {quantity > 1 && <button className="add-btn" onClick={() => removeAllTypes(data)}>Delete all</button>}
            </nav>
        </figure>
    )
}