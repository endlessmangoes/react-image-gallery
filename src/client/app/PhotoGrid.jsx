import React from 'react';
import Photo from './Photo.jsx';

// photo grid..
class PhotoGrid extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
		if (this.props.photos.length < 1) {
			return (
				<div className='photo mdl-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
					<div className="gallery-loader mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
				</div>);
		}

		// build photo cards
    var photos = this.props.photos.map((photo) => {
			let photoSrc = "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/"+ photo.id + "_" + photo.secret + "_m.jpg";
      return <Photo key={photo.owner} src={photoSrc} title={photo.title} />;
    });

		// return a grid of photo cards
    return (
			<div className='photo-grid mdl-grid'>
        {photos}
      </div>
    )
  }
}

export default PhotoGrid;
