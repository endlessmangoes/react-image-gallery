import React from 'react';
import Photo from './Photo';

// photo grid..
class PhotoGrid extends React.Component {
  render() {
    var photos = this.props.photos.map((photo) => {
      return <Photo key={photo.author_id} src={photo.media.m} title={photo.title} />;
    });

    return (
			<div className='photo-grid mdl-grid'>
        {photos}
      </div>
    );
  }
}

export default PhotoGrid;
