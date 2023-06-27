import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <SearchBar />
                <button>Card</button>
            </div>
        </header>
    )
}

export default Header