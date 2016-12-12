import React from 'react';

// photo component..
class Photo extends React.Component {
  constructor(props) {
    super(props);

    // default image url (source) and title
    this.src = '';
    this.title = '';
  }

  render() {
		// if the source url for the image is not set,
    if (!this.props.src) {
        // if there isn't a title or src, don't render a card
        return false;
    }

    return (
      <div className='photo mdl-card mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet mdl-cell--12-col-phone mdl-shadow--2dp'>
				<img src={this.props.src}/>

        <div className='mdl-card__title'>
            <span>{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Photo;
