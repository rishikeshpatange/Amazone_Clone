import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';
import { useStatevalue } from './StateProvider';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user }, dispatch] = useStatevalue();

    // const stripe = useStripe();
    // const elements = useElements();


    return (
        <div className='payment'>
            <div className="payment__container">
                <h1> Checkout (<Link to="/Checkout"> {basket?.length} items </Link>) </h1>

                {/* payment section - delivery area */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Nagpur, Maharashtra</p>
                    </div>
                </div>

                {/* payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__item">
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

                {/* payment section - payment method */}
                <div className="payment__section">
                    <h3>Payment method</h3>
                    <div className="payment__details">
                        <form>
                            <div className="payment__priceContainer" >
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>Subtotal ({basket?.length}items): <strong>{value}</strong></p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs"}
                                />
                            </div>

                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment
