import './App.css';
import vinylData from './assets/vinyl-data.json';
import Vinyl from './components/Vinyl';
import Sort from './components/Sort';
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

// function sortRecords(type) {
// 	let ret = vinylData.sort((itemA, itemB) => {return itemA[type] - itemB[type]});
// }

function App() {
	const [totalPrice, setTotalPrice] = useState(0);
	const [cart, setCart] = useState([]);
	const [info, setInfo] = useState(vinylData);
	console.log(info);

	function sortRecords(type) {
		// let ret = info.sort((itemA, itemB) => {return itemA[type] - itemB[type]});
		// console.log("bruh");
		// console.log(ret);
		setInfo(prevInfo => [...prevInfo].sort((itemA, itemB) => {return itemA[type] - itemB[type]}));
	}

	return (
		<div className="App">
		<h1>Empire Records</h1>

		<div className="Main">
			<div className="Side">
				<div className="Side-Subsect">
					<h2 id="light-text">Sort By:</h2>
					<Sort sortRecords={sortRecords} />
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
				{info.map((item, index) => (
					<Vinyl name={item.name} artist={item.artist} genre={item.genre} decade={item.decade}price={item.price} cover={item.image} totalPrice={totalPrice} setTotalPrice={setTotalPrice} cart={cart} setCart={setCart} />
				))}
			</div>
		</div>
		</div>
	);
}

export default App;
