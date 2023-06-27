import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    return (
            <form className='search-bar'>
                <input
                    type="search"
                    placeholder='Procure seu produto'
                    className='search-input'
                    required
                    value={searchValue}
                    onChange={({ target }) => setSearchValue(target.value)}
                />

                <button 
                type="submit" 
                className='search-button' >
                    <BsSearch />
                </button>
            </form>
    )
}

export default SearchBar