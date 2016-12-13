import React from 'react';

// photo component..
class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.src = '';
    this.title = '';
  }

  render() {
		// if no img source url
    if (!this.props.src) {
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
