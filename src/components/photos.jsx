import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import React from 'react';

function Photo () {
    return(
        <div id="photo">
        <div className="photo">
            <h1>our pictures</h1>
            <img className='img' src={photo1} alt="Photo 1" />
            <img  className='img' src={photo2} alt="Photo 2" />
            <img className='img' src={photo3} alt="Photo 3" />
            <img className='img' src={photo4} alt="Photo 4" />


        </div>
        </div>
    )
}

export default Photo;