import { useState } from 'react';

export default function AddButton(props) {
    const [btnText, setBtnText] = useState("Add to Cart");
    const [btnState, setBtnState] = useState(true);

    return (
        <button
        onClick={() => 
            {
                if (btnState) {
                    props.setTotalPrice(Math.round((props.totalPrice + props.itemPrice) * 1e12) / 1e12);
                    props.setCart([...props.cart, props.itemName]);
                    setBtnText("Remove from Cart");
                    setBtnState(false);
                } else {
                    props.setTotalPrice(Math.round((props.totalPrice - props.itemPrice) * 1e12) / 1e12);
                    props.setCart(props.cart.filter(item => item !== props.itemName));
                    setBtnText("Add to Cart");
                    setBtnState(true);
                }
            }
        }
        >
            {btnText}
        </button>
    );
}