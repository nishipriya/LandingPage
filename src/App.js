import './App.css';
import Naverbars from './Components/Navebar/Naverbars';
import Search from './Components/SearchBox/Search';
import Dedicateds from './Components/Dedicated/Dedicateds';
import Card from './Components/Cards/Card';
import Mains from './Components/Main/Mains';
import Companys from './Components/Company/Companys';
import Prices from './Components/Price/Prices';
import Footers from './Components/Footer/Footers';
function App() {
  return (
    <div className="App">
     <Naverbars/>
     <br/>
     <br/>
     <Search/>
     <br/>
     <br/>
     <Mains/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Dedicateds/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Card/>
   
     
   <Companys/>
   <br/>
     <br/>
     <Prices/>
     <br/>
     <br/>
     <Footers/>
    </div>
  );
}

export default App;
