import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import Header from './Header';
import Heading from './heading';
import Img from './img';
import Footers from './Footer';
function App() {
  return (
    <div className="about">
      <div className="wrapper1">
        <div className="Footter">
    <div className="App">
      
      <Header/>
      <Heading/>
      <Img/>
      
    </div>
    </div>
    </div>
    <Footers/>
    <Homepage/>
    </div>
  );
}

export default App;
