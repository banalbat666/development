import './../App.css';
import AddButton from "./AddButton.js";
import { useState } from 'react';


export default function Vinyl(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="VinylItem">
            <img src={props.cover} alt={props.name + " by " + props.artist} id="img"/>
            <h4 id="header-text">"{props.name}" by {props.artist}</h4>
            <div id="body-text">
                <p>Genre: {props.genre}</p>
                <p>Decade: {props.decade}</p>
                <p>Price: ${props.price}</p>
            </div>
            <AddButton totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice} itemPrice={props.price} itemCount={count} setItemCount={setCount} cartContents={props.cartContents} setCartContents={props.setCartContents} itemName={props.name} />
        </div>
    );
}