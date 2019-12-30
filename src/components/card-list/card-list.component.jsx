import React from 'react';

import { Card } from '../card/card.component';

export const CardList = props => (
  <div className='row'>
    
      {props.photos.map(photo => (
        <div key={photo.id} className="col-3 list-custom">
          <Card photo={photo} />
        </div>
      ))}
    
  </div>
);
