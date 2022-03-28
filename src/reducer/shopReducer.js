import { SHOP_TYPES } from "../actions/shopActions"
import { products } from "../assets/products"


export const shopInitialState= {
    products: products,
    cart: []
} 

export function shopReducer(state, action){
    switch (action.type) {
        case SHOP_TYPES.ADD_TO_CART: {
            let newItem = action.payload
            let itemInCart = state.cart.find(item => newItem.name === item.name && newItem.id === item.id)
            return itemInCart 
                ? { ...state, cart: state.cart.map(item => 
                    (newItem.name === item.name && newItem.id === item.id)
                        ? {...item, quantity: item.quantity + 1}
                        : item)
                }
                : { ...state, cart: [ ...state.cart, { ...newItem, quantity: 1 } ] }
        }
        case SHOP_TYPES.REMOVE_1: {
            let itemToDelete = state.cart.find(item => (item.id && item.name) === (action.payload.id && action.payload.name))
            return itemToDelete.quantity > 1
                ? { ...state, cart: state.cart.map(item => 
                    ((item.id && item.name) === (itemToDelete.id && itemToDelete.name))
                        ? {...item, quantity: item.quantity - 1}
                        : item
                )}
                : { ...state, cart: state.cart.filter(item => item.name !== action.payload.name) }
        }
        case SHOP_TYPES.REMOVE_ALL_TYPES: {
            return {
                ...state,
                cart: state.cart.filter(item => item.name !== action.payload.name)
            }
        }
        case SHOP_TYPES.CLEAR_CART: {
            return shopInitialState;
        }
        default:
            return state;
    }
}
