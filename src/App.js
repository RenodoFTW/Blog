import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './pages/Programming';
import Homepage from './pages/Homepage';

function App() {
    useEffect(() => {

        document.title = "Dom's Blog (I Guess)";
    
      }, []);
    return <HashRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </HashRouter>
}

export default App;
