import React from 'react';
import {render} from 'react-dom';
var data = [];

// photo component..
class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.src = '';
		this.title = '';
		this.state = {'state': 'loading'};
  }


	componentDidMount() {
		this.setState({'state': 'done'});
	}


  render() {
		if (this.state.state === 'loading') {
			// display a loading symbol if image hasn't loaded
			return (
				<div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
			);
		}

    return (
      <div className='photo mdl-card mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-shadow--2dp'>
        <img src={this.props.src} />

        <div className='mdl-card__title'>
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

// photo grid..
class PhotoGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'state': 'loading',
			'photos': []
		};
	}

	componentWillMount(){
		this.dataSource();
	}

	componentWillReceiveProps(nextProps){
		this.dataSource(nextProps);
	}

	dataSource(props) {
		props = props || this.props;

    return $.getJSON({
      type: "get",
      dataType: 'json',
      url: "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=bcc3bbb71c12693b4f2fde281bd75cdd&format=json&jsoncallback=?"
    }).done(function(result) {
			console.info(result.stat);
      this.setState({
				'photos': result.photos.photo
			});
    }.bind(this));
	}


  render() {
		if (this.state.photos.length < 1) {
			return (
				<div className='photo-grid mdl-grid'>
					<div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
				</div>);
		}

    var photos = this.state.photos.map((photo) => {
			let photoSrc = "https://farm"+ photo.farm +".static.flickr.com/"+ photo.server +"/"+ photo.id +"_"+ photo.secret +"_m.jpg";
      return <Photo key={photo.owner} src={photoSrc} title={photo.title} />;
    });

    return (
			<div className='photo-grid mdl-grid'>
        {photos}
      </div>
    );
  }
}


// search input
class SearchInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) {
		// basic user validation
		if (!event.target.value) {
			return false;
		}

		let url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bcc3bbb71c12693b4f2fde281bd75cdd"
			+ "&tags='" + event.target.value + "'&format=json&jsoncallback=?";

		$.getJSON(url)
			.done(function(req, res) {
		  	debugger;
			})
			.error(function(error) {
		  	console.log('Issue trying to get..: ' + error.message);
			});
	}

  render() {
    return (
			 <input className='mdl-textfield__input' type="text" name="search" id="search" onChange={this._handleInput} />
    );
  }
}

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.SearchInputChange = this.SearchInputChange.bind(this);

		this.setState = {
			'state': 'loading',
			'photos': []
		}
	}

	render() {
		return (
			<PhotoGrid photos={data}>
				<SearchInput></SearchInput>
			</PhotoGrid>
		)
	}


}

render(Layout, document.getElementById('app'));
