import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div>
            <form>
                <input
                    type="search"
                    placeholder='Procure seu produto'
                    className='search-input'
                    required
                />
            </form>

            <button type="submit" className='search-input' >
                <BsSearch />
            </button>
        </div>
    )
}

export default SearchBar