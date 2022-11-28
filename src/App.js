import './App.css';
import vinylData from './assets/vinyl-data.json';
import Vinyl from './components/Vinyl';
import Sort from './components/Sort';
import Filter from './components/Filter';
import { useState } from 'react';

vinylData.forEach((item) => {
	item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function PrintCart(arr) {
	let ret = [];

	for (var i = 0; i < arr.length; i++) {
		ret.push(<li id="light-text">{arr[i]}</li>);
	}

	return ret;
}

function App() {
	const [totalPrice, setTotalPrice] = useState(0);
	const [cart, setCart] = useState([]);
	const [info, setInfo] = useState(vinylData);
	const [appliedFilters, setAppliedFilters] = useState([]);
	const [sorter, setSorter] = useState("imgNum");
	const filterGroups = [
		{
			type: "genre",
			options: ["Rock", "Pop", "Hip Hop"]
		},
		{
			type: "decade",
			options: ["70s", "80s", "90s", "00s", "10s"]
		}
	];

	function sortRecords(type) {
		setSorter(type);
		setInfo((prevInfo) => [...prevInfo].sort((itemA, itemB) => {return itemA[type] - itemB[type]}));
	}

	function jankSort(type) {
		vinylData.sort((itemA, itemB) => itemA[type] - itemB[type]);
	}

	function applyFilters(filters) {
		if (filters.length === 0) {
			return vinylData;
		}

		let ret = [];
		jankSort(sorter);
		vinylData.forEach((record) => {
			let applies = true;
			filters.forEach((f) => {
				if (record[f.filterType] !== f.option) {
					applies = false;
				}
			});
			if (applies) {
				ret.push(record);
			}
		})

		return ret;
	}

	function filterRecords(option, filterType) {
		let ret = [];

		if (appliedFilters.some((f) => f.option === option)) {
			ret = appliedFilters.filter((elt) => elt.option !== option);
		} else {
			ret = [...appliedFilters, {option, filterType}];
		}

		setAppliedFilters(ret);
		setInfo(applyFilters(ret));
	}

	function displayFilters(group) {
		return <Filter filterGroup={group} filterType={group.type} filterRecords={filterRecords} />;
	}

	return (
		<div className="App">
		<h1>Empire Records</h1>

		<div className="Main">
			<div className="Side">
				<div className="Side-Subsect">
					<h2 id="light-text"><u>Sort By:</u></h2>
					<Sort sortRecords={sortRecords} />
				</div>

				<div className="Side-Subsect">
					<h2 id="light-text"><u>Filter By:</u></h2>
					{filterGroups.map(displayFilters)}
				</div>

				<div className="Side-Subsect">
					<h2 id="light-text"><u>Cart:</u></h2>
					<ul>
						{PrintCart(cart)}
					</ul>
					<b><p id="light-text">Total: ${totalPrice}</p></b>
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
