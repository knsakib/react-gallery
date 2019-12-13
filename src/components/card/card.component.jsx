import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card card-custom'>
    <img className="card-img-top"
      alt={props.photo.tags}
      src={props.photo.webformatURL}
    />
    <div className="card-body">
      <p className="card-text"> {props.photo.tags} </p>
    </div>
  </div>
);
