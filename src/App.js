import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './scenes/About.jsx';
import Home from './scenes/Home.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='site-header'>This is the site header!</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/'       element={<Home />}/>
            <Route path='/about'  element={<About />}/>
          </Routes>
        </BrowserRouter>

        <footer>The only part of this website being reloated is the image and the paragraph.</footer>
      </header>
    </div>
  );
}

export default App;
