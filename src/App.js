import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Homepage from './pages/Homepage';

function App() {
    return <HashRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </HashRouter>
}

export default App;
