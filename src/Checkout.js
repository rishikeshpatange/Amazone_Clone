import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStatevalue } from './StateProvider';

function Checkout() {

    const [{ basket,user}, disbatch] = useStatevalue();

    
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"      alt='description of image' className="checkout__ad"/>
                <div >
                    <h3> Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout
