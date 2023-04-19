import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './scenes/About';
import Home from './scenes/Home.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
