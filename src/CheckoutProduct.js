import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        console.log(basket);
        // remove item from basket
        // dispatch({
        //     type: 'REMOVE_FROM_BASKET',
        //     id: id,

        // })
        // console.log("ji there");

    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image"
                src={image}></img>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkout_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
