import logo from './logo.svg';
import './App.css';
import homePage from './Components/Home';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          welcome to Home page
          <homePage/>
        </p>
      
      </header>
   
    </div>
  );
}

export default App;
