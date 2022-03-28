import { useState } from "react"
import { ProductItem } from "./ProductItem"


export const CategoriesDiv = ({data, category, addToCart}) => {
    const{ stock: items } = data
    const [currentDiv, setCurrentDiv] = useState(0)
    const length = items.length -1

    const nextSlide = () => {
        setCurrentDiv(currentDiv === 3 ? 0 : currentDiv + 1)
    }
    const prevSlide = () => {
        setCurrentDiv(currentDiv === 0 ? 3 : currentDiv - 1)
    }
    
    return(
        <div className='categories-div'>
            <h2>{category}</h2>
            {items.map((item, index) => 
                    <ProductItem 
                        data={item}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}
                        classStyle={currentDiv === index ? "slide-div active" : "slide-div"}
                        key={index}
                        addToCart={addToCart}
                    />
            )}
            <button onClick={prevSlide} className="div-l-btn">&lsaquo;</button>
            <button onClick={nextSlide} className="div-r-btn">&rsaquo;</button>
        </div>
    )
}