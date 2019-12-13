import React from 'react';

import { Card } from '../card/card.component';



export const CardList = props => (
  <div className='row'>
    
      {props.photos.map(photo => (
        <div className="col-3 list-custom">
          <Card key={photo.id} photo={photo} />
        </div>
      ))}
    
  </div>
);
