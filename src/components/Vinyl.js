import './../App.css';
// import AddButton from "./AddButton.js";
import { useState } from 'react';


export default function Vinyl(props) {
    // const [btnText, setBtnText] = useState("Add to Cart");
    // const [btnState, setBtnState] = useState(true);
    // const [m, setM] = useState(new Map());
    // console.log(m);

    // console.log(props.cart);
    return (
        <div className="VinylItem">
            <img src={props.cover} alt={props.name + " by " + props.artist} id="img"/>
            <h4 id="header-text">"{props.name}" by {props.artist}</h4>
            <div id="body-text">
                <p>Genre: {props.genre}</p>
                <p>Decade: {props.decade}</p>
                <p>Price: ${props.price}</p>
            </div>
            {/* <AddButton totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice} itemPrice={props.price} itemName={props.name} cart={props.cart} setCart={props.setCart} /> */}
            <button
                onClick={() => 
                    {
                        if (!props.cart.includes(props.name)) { // click add to cart
                            // fixes js float math
                            props.setTotalPrice(Math.round((props.totalPrice + props.price) * 1e12) / 1e12);
                            // add item to cart
                            props.setCart([...props.cart, props.name]);
                            // setBtnText("Remove from Cart");
                            // props.setBtnMap(props.btnMap.set(props.name, false));
                            // setBtnState(false);
                        } else { // click remove from cart
                            // fixes js float math
                            props.setTotalPrice(Math.round((props.totalPrice - props.price) * 1e12) / 1e12);
                            // remove item from cart
                            props.setCart(props.cart.filter((item) => item !== props.name));
                            // setBtnText("Add to Cart");
                            // props.setBtnMap(props.btnMap.set(props.name, true));
                            // setBtnState(true);
                        }
                    }}
                >
                    {props.cart.includes(props.name) ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}