import React from 'react';
import './Card.css';
import ww from '../../assets/ErickCoffe.svg'
const Card = () => {
    return (
        <div className="card">
        <div className="card-body">
            <div className="card-image">
                <img src="https://via.placeholder.com/150" alt="Product" />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h2>Erick Coffee</h2>
                    <p>The website features a modern and sleek design, showcasing Erick Coffee’s products and brand story.</p>
                    <div className="tags">
                        <span>React</span>
                        <span>SCSS</span>
                    </div>
                </div>
                <div className="card-description">
                    <a href="https://github.com" className="icon">Code</a>
                    <a href="https://example.com" className="icon">Live Demo</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;
