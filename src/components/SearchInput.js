import { Link } from "react-router-dom"
import { useState } from "react"

export const SearchInput = () =>{
    const [search, setSearch] = useState("")
    const query = (e) => {
        setSearch(e.target.value)
        
    }
    const enter = (e) => e.key === "Enter" && (window.location.href=`./#/products?${search}`)
    return (
        <div className='input-div'>
                <input 
                    type="text" 
                    name="search" 
                    placeholder='Search for...' 
                    onChange={(e) => query(e)}
                    onKeyDown={(e) => enter(e)}
                />
                <Link to={`/products?${search}`}>
                    <input type="submit" value='?' id='search-btn' />
                </Link>
        </div>
    )
}