import React, { useContext, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../context/AppContext'
import './SearchBar.css'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const { setProducts, setLoading } = useContext(AppContext)

    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)

        const products = await fetchProducts(searchValue)

        setProducts(products)
        setLoading(false)
        setSearchValue('')
    }

    return (
            <form className='search-bar' onSubmit={handleSearch}>
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