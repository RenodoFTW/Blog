import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Programming from './pages/Programming';
import Homepage from './pages/Homepage';
import ContentArea from './pages/Content Areas';
import Projects from './pages/Projects';
import Placement from './pages/Placement';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Masterclasses from './pages/Masterclasses';
import Contact from './pages/Contact';

function App() {
    useEffect(() => {

        document.title = "Dom's Blog";
    
      }, []);
    return <HashRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Programming' element={<Programming />} />
            <Route path='/Content Areas' element={<ContentArea />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Placement' element={<Placement />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Masterclasses' element={<Masterclasses />} />
            <Route path='/Contact' element={<Contact />} />

        </Routes>
    </HashRouter>
}

export default App;
