import { floatTwo } from "../helpers/floatTwo";
import { ProductItem } from "./ProductItem"

export const Cart = ({cart, actions}) => {
    const [removeOne, removeAllTypes, clearCart] = actions;
    let totalToPay = 0;
    let totalItems = 0;
    cart.forEach(item => {
        totalToPay = item.price * item.quantity + totalToPay;
        totalItems = item.quantity + totalItems;
    });
    // console.log(totalToPay, totalItems)
    
    return (
        <div className="cart">
            <nav>
                {cart.length > 0 
                    ? cart.map((item, index) => 
                        <ProductItem 
                            key={index} 
                            data={item} 
                            classStyle="listed" 
                            cart={true}
                            removeOne={removeOne}
                            removeAllTypes={removeAllTypes}
                        />
                    ) 
                    : <div className="empty"><p>No items in cart... Yet.</p></div>
                }
            </nav>
            <aside>
                <button onClick={()=>clearCart()} className="clear-cart-btn">Clear Cart</button>
                <nav>
                    <div className="total">
                        <div><p>Total Items:</p><p><b>{totalItems}</b></p></div>
                        <div><p>Total to pay:</p><p><b>{floatTwo(totalToPay)}</b>$</p></div>
                    </div>
                    {cart.length > 0 && 
                        cart.map((item) => <div className="cart-item" key={item.name}><p><b>{item.name}</b></p><p>x {item.quantity}</p></div>)}
                </nav>
            </aside>
        </div>
    )
}