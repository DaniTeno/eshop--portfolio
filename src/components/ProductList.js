import { Link } from "react-router-dom"

export const ProductList = ({products, classStyle = null, buttonHandler, current}) => {

    return (
        <>
            <ul className={classStyle}>
                {products.map((product, index) => {
                    return (
                        <Link to={`/products/${product.category}`} key={`${product.stock.type}_${index}`} onClick={() => buttonHandler(product.category)}>
                            <li className={current === `/products/${product.category}` ? "active-link" : ""}>{product.category}</li>
                        </Link>
                    )
                })}
            </ul>
        </>
    )
}