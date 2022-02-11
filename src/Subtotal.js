import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStatevalue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate} from "react-router-dom"

function Subtotal() {
    const history = useNavigate();
    const [{ basket }, disbatch] = useStatevalue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket?.length}items): <strong>{value}</strong></p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" /> This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs"}
            />
            <button onClick={e => history('/payment')}>Proceed to checkout</button>


        </div>
    );
}

export default Subtotal