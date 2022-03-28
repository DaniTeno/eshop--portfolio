import { useState } from "react"
import { products } from "../assets/products"
import { ProductItem } from "./ProductItem"


export const ImgCarousel = ({addToCart}) => {
    const bannerProd = []
    const [current, setCurrent] = useState(0)
    
    products.forEach((category) => 
        category.stock.map((item, index) => {
            if(index > 0) return null
            return bannerProd.push(item)
        })
    )
    setTimeout(() => setCurrent(current === bannerProd.length - 1 ? 0 : current + 1), 5000)
    
    return(
        <nav className='img-carousel'>
            {bannerProd.map((item, index) => 
                <ProductItem 
                    data={item}
                    index={index}
                    classStyle={current=== index ? "slide active" : "slide"}
                    key={index}
                    addToCart={addToCart}
                />
            )}
        </nav>
    )
}
