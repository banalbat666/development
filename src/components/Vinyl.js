import Button from 'react-bootstrap/Button';
import './../App.css';

export default function Vinyl(props) {
    return (
        <div className="VinylItem">
            <img src={props.cover} alt={props.name + " by " + props.artist} id="img"/>
            <h4 id="header-text"><u>{props.name}</u> by {props.artist}</h4>
            <div id="body-text">
                <p>Genre: {props.genre}</p>
                <p>Decade: {props.decade}</p>
                <p>Price: ${props.price}</p>
            </div>
            {/* <p>Genre: {props.genre}</p>
            <p>Decade: {props.decade}</p>
            <p>Price: ${props.price}</p> */}
            <Button variant="primary">Add to Cart</Button>
        </div>
    );
}