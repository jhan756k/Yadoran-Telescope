import React from 'react';
import '../Style/Card.css'

const Card = ({idea, img, link}) => {
    return (
        <div className='cards'>
            <a href={link} className="fill-div">
                <img src={img} alt="idea" />
                <h1>{idea}</h1>
            </a>
        </div>
    );
};

export default Card;