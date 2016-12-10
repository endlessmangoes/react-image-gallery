import React from 'react';

// photo component..
class Photo extends React.Component {
  constructor(props) {
    super(props);

		// default src and title
    this.src = '';
		this.title = '';
  }

  render() {
		if (!this.props.title || !this.props.src) {
			// display a loading symbol if image hasn't loaded
			return (
				<div className='photo mdl-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
					<div className="gallery-loader mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
				</div>
			);
		}

    return (
      <div className='photo mdl-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
        <img src={this.props.src} />

        <div className='mdl-card__title'>
          <span>{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default Photo;
