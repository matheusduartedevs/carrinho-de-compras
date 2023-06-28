import React from 'react'
import './ProductCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'

const ProductCard = () => {
  return (
    <section className='product-card'>
        <img src="https://http2.mlstatic.com/D_831146-MLA48158909207_112021-W.jpg" alt="product" className="card-image" />

        <div className="card-infos">
            <h2 className="card-price">R$200.20</h2>
            <h2 className="card-title">Produto Nome</h2>
        </div>

        <button type="button" className="button-add-cart">
          <BsFillCartPlusFill />
        </button>
    </section>
  )
}

export default ProductCard