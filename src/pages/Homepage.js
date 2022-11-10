import Carousel from '../components/Carousel';
import HTML from '../images/HTML Image.png';
import Python from '../images/Python Image.png';
import C from '../images/C Image.png';
import MySQL from '../images/SQL Image.png';
import JavaScript from '../images/Javascript Image.png';
import Reactimg from '../images/React Image.png';
import './Homepage.css';
import React from 'react';

export default function Homepage() {
    return <div>
        <div className='Topdiv'>
            <h1 className='Titletext border-gradient'>Welcome To My Blog!</h1>
        </div>
        <Carousel />

        

        <div className="bottomdiv">
            <div className='aboutme'>
                <h1 className='abouttitle'>About Me</h1>
                <p className='aboutmecontent'>I am a 2nd year T-Level Digital Production, Design & Development Student.
                I study different fields such as emerging tech, coding and industry standards. I am interested in becoming
                a game developer in the future, as I aspire to code all different genres of games from fantasy RPGs to hero FPS.
                Currently, I am placed in a digital marketing agency in Portsmouth designing multiple website front-ends for clients
                and sending them to backend developers for them to program databases onto them.</p>
                <p className='aboutmecontent'>My interests include many different games from Overwatch 2, Hades and the Crusader Kings franchise.
                Along with this, I enjoy other media such as movies from Die Hard, to Kingsman, Ghostbusters and Star Wars (pre-Disney).</p>
            </div>
            <div className='codeexamples'>
                <div className="row1">
                    <img
                    className='HTML'
                    src={HTML}
                    ></img>
                    <img
                    className='Python'
                    src={Python}
                    ></img>
                    <img
                    className='C'
                    src={C}
                    ></img>
                </div>
                <div className='row2'>
                    <img
                    className='MySQL'
                    src={MySQL}
                    ></img>
                    <img
                    className='JavaScript'
                    src={JavaScript}
                    ></img>
                    <img
                    className='Reactimg'
                    src={Reactimg}
                    ></img>
                </div>
            </div>
        </div>
    </div>
}
