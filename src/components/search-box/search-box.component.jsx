import React from 'react';

export const SearchBox = props => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">Search with Photo Tags</span>
        <input
          className='form-control'
          type='search'
          placeholder={props.placeholder}
          onChange={props.onSearchChange}
        />
    </div>
  </div>
);
