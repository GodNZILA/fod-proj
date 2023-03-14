import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Livraison from './pages/Livraison';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    < >
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/livraison" element={<Livraison/>}/>
      </Routes>
    </>
  );
}

export default App;
