import './App.css';
import vinylData from './assets/vinyl-data.json';
import Vinyl from './components/Vinyl';
// import ClearButton from './components/ClearButton';
import { useState } from 'react';

vinylData.forEach((item) => {
	item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function PrintCart(arr) {
	let ret = [];

	for (var i = 0; i < arr.length; i++) {
		ret.push(<li id="light-text" style={{textAlign: 'left'}}>{arr[i]}</li>);
	}

	return ret;
}

function App() {
	const [totalPrice, setTotalPrice] = useState(0);
	const [cart, setCart] = useState([]);

	return (
		<div className="App">
		<h1>Empire Records</h1>

		<div className="Main">
			<div className="Side">
				<div className="Side-Subsect">
					<h2 id="light-text">Sort By:</h2>
				</div>

				<div className="Side-Subsect">
					<h2 id="light-text">Filter By:</h2>
				</div>

				<div className="Side-Subsect">
					<h2 id="light-text">Cart:</h2>
					<ul>
						{PrintCart(cart)}
					</ul>
					<p id="light-text">Total: ${totalPrice}</p> 
				</div>
			</div>

			<div className="Records">
				{vinylData.map((item, index) => (
					<Vinyl name={item.name} artist={item.artist} genre={item.genre} decade={item.decade}price={item.price} cover={item.image} totalPrice={totalPrice} setTotalPrice={setTotalPrice} cart={cart} setCart={setCart} />
				))}
			</div>
		</div>
		</div>
	);
}

export default App;
