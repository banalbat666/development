export default function ClearButton(props) {
    return (
        <button
        onClick={() => {
            props.setTP(0);
            props.cart.clear();
        }}
        >
            Clear Cart
        </button>
    );
}