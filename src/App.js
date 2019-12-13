import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';



class App extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://pixabay.com/api/?key=[YOUR_OWN_KEY]&q=lanscape+nature&image_type=photo&pretty=true')
      .then(response => response.json())
      .then(photos => this.setState({ photos: photos.hits }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { photos, searchField } = this.state;
    const filteredphotos = photos.filter(photo =>
      photo.tags.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>A React Photo Gallery</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList photos={filteredphotos} />
      </div>
    );
  }
}

export default App;
