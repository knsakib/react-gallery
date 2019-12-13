import React from 'react';

export const SearchBox = props => (
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Search with Photo Tags</span>
        <input
          className='form-control'
          type='search'
          placeholder='search photos'
          onChange={props.onSearchChange}
        />
    </div>
  </div>
);
