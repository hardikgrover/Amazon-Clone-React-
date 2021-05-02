import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <h2 className="checkout_title">Your shopping basket</h2>
                <div>
                    <CheckoutProduct
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                </div>

                {/* {
                    basket.map(item => {
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}>

                        </CheckoutProduct>
                    })
                } */}
            </div>
            <div className="checkout_right">
                <Subtotal></Subtotal>




            </div>
        </div>
    )
}

export default Checkout
