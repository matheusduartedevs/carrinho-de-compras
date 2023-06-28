import React from 'react'
import './CartItem.css'
import { BsCartDashFill } from 'react-icons/bs'

const CartItem = () => {
  return (
    <section className="cart-item">
        <img src="" 
        alt="imagem do produto" 
        className='cart-item-image'
        />

        <div className="cart-item-content">
            <h3 className="cart-item-title">Titulo</h3>
            <h3 className="cart-item-price">R$ 120,00</h3>

            <button type="button" className="button-remove-item">
                <BsCartDashFill />
            </button>
        </div>
    </section>
  )
}

export default CartItem