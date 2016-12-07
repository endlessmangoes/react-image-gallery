import React from 'react';

// photo component..
class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.src = '';
		this.title = 'Loading...';
		this.state = {'state': 'loading'};
  }


	componentDidMount() {
		// photo has been added to document
		// hide loading animation..
		// update state
		this.setState({'state': 'done'});
	}


  render() {
		if (this.state.state === 'loading') {
			// display a loading symbol if image hasn't loaded
			return (
				<div className='photo mdl-card mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
					<div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
				</div>
			);
		}

    return (
      <div className='photo mdl-card mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
        <img src={this.props.src} />

        <div className='mdl-card__title'>
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default Photo;
