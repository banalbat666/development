import logo from './logo.svg';
import './App.css';
import vinylData from './assets/vinyl-data.json';

vinylData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  return (
    <div className="App">
      <h1>Empire Records</h1>

      <div className="Main">
        <div className="Records">
          <img src={vinylData[0].image} />
        </div>
        
        <div className="Cart">

        </div>
      </div>
    </div>
  );
}

export default App;
