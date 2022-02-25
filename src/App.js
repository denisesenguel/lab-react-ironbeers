import HomePage from './pages/HomePage';
import Header from './components/Header';
import Beers from './pages/Beers';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="/beers" element={ <Beers />}></Route>
        <Route path="/beers/create" element={ <div>Create Beer Form</div> }></Route>
        <Route path="/beers/random" element={ <div>Random Beer</div> }></Route>
      </Routes>
    </div>
  );
}

export default App;
