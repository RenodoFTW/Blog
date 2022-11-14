import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ContentArea from './pages/Content Areas';
import Projects from './pages/Projects';
import Placement from './pages/Placement';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Masterclasses from './pages/Masterclasses';
import Contact from './pages/Contact';
import CA1_4 from './pages/1-4';
import CA5_8 from './pages/5-8';
import Apps from './pages/apps';
import C from './pages/c';
import Challenges from './pages/challenges';
import HTML from './pages/html';
import Script from './pages/javascript';
import Misc from './pages/misc';
import UX from './pages/ux';
import Python from './pages/python';
import Functional from './pages/Functional_Requirements_Blog'


function App() {
    useEffect(() => {

        document.title = "Dom's Blog";
    
      }, []);
    return <HashRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Programming/python' element={<Python />} />
            <Route path='/Programming/c' element={<C />} />
            <Route path='/Programming/html' element={<HTML />} />
            <Route path='/Programming/javascript' element={<Script />} />
            <Route path='/Content Areas/1-4' element={<CA1_4 />} />
            <Route path='/Content Areas/5-8' element={<CA5_8 />} />
            <Route path='/Projects/ux' element={<UX />} />
            <Route path='/Projects/apps' element={<Apps />} />
            <Route path='/Projects/challenges' element={<Challenges />} />
            <Route path='/Projects/misc' element={<Misc />} />
            <Route path='/Placement' element={<Placement />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Masterclasses' element={<Masterclasses />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Functional' element={<Functional />} />

        </Routes>
    </HashRouter>
}

export default App;
