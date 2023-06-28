import React from 'react'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {
  return (
    <section className='cart'>
        <div className="cart-items">
            <CartItem />
        </div>

        <div className="cart-resume">resumo do carrinho</div>
    </section>
  )
}

export default Cart