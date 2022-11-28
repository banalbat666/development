import './../App.css';
import { useState } from 'react';

export default function SortItems(props) {
    const [sortState, setSortState] = useState("imgNum");

    function changeSort(event) {
        console.log(event.target.value);
        setSortState(event.target.value);
        props.sortRecords(event.target.value);
    }

    return (
        <div style={{display:'flex',flexDirection:'column'}} value={sortState} onChange={changeSort}>
            <div>
                <input type="radio" value="imgNum" id="popular" name="sorter" checked={sortState==="imgNum"}></input>
                <label for="popular" id="light-text">Popular</label>
            </div>

            <div>
                <input type="radio" value="price" id="low-high" name="sorter" checked={sortState==="price"}></input>
                <label for="low-high" id="light-text">Price</label>
            </div>
        </div>
    );
}