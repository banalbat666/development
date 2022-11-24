export default function AddButton(props) {
    return (
        <button
        onClick={() => {
            props.setTotalPrice(Math.round((props.totalPrice + props.itemPrice) * 1e12) / 1e12);
            props.setItemCount(props.itemCount + 1);
            props.setCartContents(
                props.cartContents.set(props.itemName, props.itemCount + 1)
            )
        }}>
            Add to Cart
        </button>
    );
}