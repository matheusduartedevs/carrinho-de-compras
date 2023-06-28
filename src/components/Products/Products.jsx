import React, { useEffect, useState } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
        })
    }, [])

    return (
        <section className='products container'>
            <ProductCard />
        </section>
    )
}

export default Products