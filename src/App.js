import './App.css';
import vinylData from './assets/vinyl-data.json';
import Vinyl from './components/Vinyl';
import ClearButton from './components/ClearButton';
import { useState } from 'react';

vinylData.forEach((item) => {
	item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function PrintMap(m) {
	if (m.size === 0) {
		return;
	}
  	let arr = [];
	m.forEach((v, k) => {
		arr.push(v, "x \"", k, "\"", <br />)
	});
	return arr;
}

function App() {
	const [totalPrice, setTotalPrice] = useState(0);
	const [cartContents, setCartContents] = useState(new Map());

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
					<p id="light-text">{PrintMap(cartContents)}</p>
					<p id="light-text">Total: ${totalPrice}</p> 
					<ClearButton setTP={setTotalPrice} cart={cartContents} />
				</div>
			</div>

			<div className="Records">
				{vinylData.map((item, index) => (
					<Vinyl name={item.name} artist={item.artist} genre={item.genre} decade={item.decade} 
					price={item.price} cover={item.image} totalPrice={totalPrice} setTotalPrice={setTotalPrice} cartContents={cartContents} setCartContents={setCartContents} />
				))}
			</div>
		</div>
		</div>
	);
}

export default App;
