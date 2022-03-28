import { ImgCarousel } from "./ImgCarousel"
import { products } from "../assets/products"
import { CategoriesDiv } from "./CategoriesDiv"
import { ProductList } from "./ProductList"


export const Home = ({addToCart}) => {
    return (
        <>
            <div className="banner">
                <p>Best sellers</p>
                <ImgCarousel addToCart={addToCart}/>
            </div>
            <section className="categories">
                    <aside>
                        <ProductList products={products}/>
                    </aside>
                    <p className="mobile-view">Categories fast view</p>
                    <article className="categories-prev">
                        {products.map((product, index) => {
                            if(index > 5) return null
                            return <CategoriesDiv 
                                key={`${product.category}-${index}`}
                                category={product.category} 
                                data={product} 
                                addToCart={addToCart}
                            />}
                        )}
                    </article>
            </section>
        </>
    )
}
