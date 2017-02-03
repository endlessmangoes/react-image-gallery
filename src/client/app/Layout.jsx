import React from 'react';
import {render} from 'react-dom';
import PhotoGrid from './PhotoGrid.jsx';
import Sidebar from './Sidebar.jsx';
import Header from './Header.jsx';

const request = require('superagent');

/* Main layout component: contains navigation, header, and grid. */
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputChange = this.searchInputChange.bind(this);

    this.state = {
      'state': 'loading',
      'photos': [],
      'tags': ''
    }
  }

	// trigger a call to get photos
  componentWillMount() {
    this.getPhotos();
  }

  getPhotos(tags) {
    // default get url for photos
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent";
    if (tags) {
      // update get url for photos based on user criteria.
      url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" + tags;
    }

    return request.get(url)
			.query('api_key=' + process.env.FLICKRAPIKEY)
			.query('format=json')
			.query('nojsoncallback=?')
			.end(function(err, result) {
					let flickrResponse = JSON.parse(result.text);
		      this.setState({'photos': flickrResponse.photos.photo});
				}.bind(this));
  }

  searchInputChange(value) {
    this.setState({tags: value});
    this.getPhotos(value);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header tags={ this.state.tags } onChange={ this.searchInputChange } />
        <Sidebar />
        <main className="mdl-layout__content">
          <PhotoGrid photos={ this.state.photos }></PhotoGrid>
        </main>
      </div>
    );
  }
}

export default Layout;
