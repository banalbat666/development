import './../App.css';
import AddButton from "./AddButton.js";

export default function Vinyl(props) {
    return (
        <div className="VinylItem">
            <img src={props.cover} alt={props.name + " by " + props.artist} id="img"/>
            <h4 id="header-text">"{props.name}" by {props.artist}</h4>
            <div id="body-text">
                <p>Genre: {props.genre}</p>
                <p>Decade: {props.decade}</p>
                <p>Price: ${props.price}</p>
            </div>
            <AddButton />
        </div>
    );
}