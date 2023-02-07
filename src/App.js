import Orders from './Orders';
import './App.css';
import Header from './Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import FoodItems from './FoodItems';
function App() {
  return (
 <BrowserRouter>
 <Header/>
      
  <Routes>
    <Route path='/' element={<Home/>}/>
    
    <Route path='/order' element={<Orders/>}/>
  </Routes>
 </BrowserRouter>
  );
}

export default App;
