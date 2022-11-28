import './../App.css';

export default function FilterItems(props) {
    console.log(props.filterGroup)
    function createCheckbox(option) {
        return (
            <div>
                <input type="checkbox" id={option} name={props.filterType} value={option}></input>
                <label for={option} id="light-text">{option}</label>
            </div>
        );
    }

    return (
        <div>
            <h3 id="light-text">{props.filterType}</h3>
            {props.filterGroup.options.map(createCheckbox)}
        </div>
    );
}