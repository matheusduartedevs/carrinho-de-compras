import React from 'react'
import './ProductCard.css'
import { BsFillCartPlusFill } from 'react-icons/bs'
import propTypes from 'prop-types';


const ProductCard = ({ data }) => {
  const { title, thumbnail, price } = data;

  return (
    <section className='product-card'>
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card-infos">
        <h2 className="card-price">{price}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button type="button" className="button-add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;