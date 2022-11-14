import './App.css';
import vinylData from './assets/vinyl-data.json';
import Vinyl from './components/Vinyl';

vinylData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  return (
    <div className="App">
      <h1>Empire Records</h1>

      <div className="Main">
        <div className="Records">
          {vinylData.map((item, index) => (
            <Vinyl name={item.name} artist={item.artist} genre={item.genre} decade={item.decade} 
            price={item.price} cover={item.image} />
          ))}
        </div>
        
        <div className="Cart">
            <h2 id="light-text">Cart</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
