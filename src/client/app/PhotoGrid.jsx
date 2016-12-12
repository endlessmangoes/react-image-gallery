import React from 'react';
import Photo from './Photo.jsx';

// photo grid component: renders a grid of images
class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.photos.length < 1) {
			// If there aren't any photos within the Photo Grid, display a loading symbol
      return (
        <div className='flex center'>
          <div className="gallery-loader mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
        </div>
      );
    }

    // build photo cards
    var photos = this.props.photos.map((photo) => {
      let photoSrc = "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg";
      return <Photo key={photo.owner} src={photoSrc} title={photo.title}/>;
    });

    // return a grid of photo cards
    return (
      <div className='mdl-grid center'>
        {photos}
      </div>
    )
  }
}

export default PhotoGrid;
