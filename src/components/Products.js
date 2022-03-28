import { products } from "../assets/products"
import { ProductList } from "./ProductList"
import { ProductItem } from "./ProductItem"
import { Route, Routes, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

export const Products = ({addToCart}) => {
    const path = useLocation().pathname
    const [current, setCurrent] = useState(path)
    const buttonHandler = (path) => setCurrent(path)
    let search = useLocation().search
    let searchParam = search.slice(1).toLowerCase()
    let queryItem = [];

    useEffect(() => {
        setCurrent(path);
    }, [path])

    if(search.includes('?')){
        products.forEach(category => {
            category.stock.filter(item => 
                (item.type.toLowerCase().includes(searchParam)) 
                ? queryItem.push(item)
                : (item.name.toLowerCase().includes(searchParam)) 
                ? queryItem.push(item)
                : (item.desc.toLowerCase().includes(searchParam))
                ? queryItem.push(item)
                : null
            );
        })
    }
    
    return (
        <section className="products-section">
            <ProductList products={products} classStyle="product-ul" buttonHandler={buttonHandler} current={current}/>
            <nav>
                <Routes>
                    {products.map(product => 
                        <Route 
                            key={product.category}
                            exact 
                            path={`/${product.category}`} 
                            element={
                                product.stock.map(item => 
                                    <ProductItem 
                                        key={`${item.name}`} 
                                        data={item} 
                                        addToCart={addToCart} 
                                        classStyle="listed"
                                    />
                                )
                            } 
                        />
                    )}
                </Routes>
                {search.includes('?') && (queryItem.length > 0 
                    ? queryItem.map(item => 
                        <ProductItem 
                            key={`${item.name}`} 
                            data={item} 
                            addToCart={addToCart} 
                            classStyle="listed"
                        />)
                    : <p style={{color: "#eee", fontSize: "1.6rem"}}>
                        Theres no matching items to: <i style={{color: "#eee", fontSize: "1.6rem", textDecoration: "underline"}}>{search.slice(1)}</i>
                    </p>)
                }
                {(path === '/products' && !search) && <p style={{color: "#eee", fontSize: "1.6rem"}}>Select a category</p>}
            </nav>
        </section>
    )
}