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
		this.setState({'tags': event.target.value});
	}

  render() {
    return (
			 <input className='mdl-textfield__input' type="text" name="search" id="search" onChange={this.handleInput} />
    );
  }
}

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.searchInputChange = this.searchInputChange.bind(this);

		this.setState = {
			'state': 'loading',
			'photos': [],
			'tags': ''
		}
	}

	searchInputChange(value) {
		this.setState({ tags: value });
	}

	render() {
		const tags = this.setState.tags;
		return (
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<header className="mdl-layout__header">
					<div className="mdl-layout__header-row">
						<div className="mdl-layout-spacer"></div>
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
							<label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
								<i className="material-icons">search</i>
							</label>
							<div className="mdl-textfield__expandable-holder" id="search-container">
								<SearchInput tags={tags} />
							</div>
						</div>
					</div>
				</header>
				<div className="mdl-layout__drawer">
					<span className="mdl-layout-title">Photo Gallery</span>
					<nav className="mdl-navigation">
						<a className="mdl-navigation__link" href="#">Menu</a>
					</nav>
				</div>
				<main className="mdl-layout__content">
					<div className="page-content">
						<PhotoGrid photos={data}></PhotoGrid>
					</div>
				</main>
			</div>
		);
	}
}

render(React.createElement(Layout), document.getElementById('app'));

/*

		let url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bcc3bbb71c12693b4f2fde281bd75cdd"
			+ "&tags='" + event.target.value + "'&format=json&jsoncallback=?";

		$.getJSON(url)
			.done(function(req, res) {
		  	debugger;
			})
			.error(function(error) {
		  	console.log('Issue trying to get..: ' + error.message);
			});
			*/
