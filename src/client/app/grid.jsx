import React from 'react';
import {render} from 'react-dom';
import Photo from './Photo.jsx';
import PhotoGrid from './PhotoGrid.jsx';
import SearchInput from './SearchInput.jsx';

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

	componentWillMount(){
		this.getPhotos();
	}

	getPhotos(tags) {
		// default get url for photos
		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent";
		if (tags) {
			// update get url for photos based on user criteria.
			url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=" + tags;
		}

		url += "&api_key=bcc3bbb71c12693b4f2fde281bd75cdd&format=json&jsoncallback=?";

		return $.getJSON({
			type: "get",
			dataType: 'json',
			url:  url
		}).done(function(result) {
			console.info(result.stat);
			this.setState({
				'photos': result.photos.photo
			});
		}.bind(this));
	}

	searchInputChange(value) {
		this.setState({ tags: value });
		this.getPhotos(value);
	}

	render() {
		const tags = this.state.tags;
		const photos = this.state.photos;

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
								<SearchInput tags={tags} onChange={this.searchInputChange} />
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
						<PhotoGrid photos={photos}></PhotoGrid>
					</div>
				</main>
			</div>
		);
	}
}

render(<Layout />, document.getElementById('app'));
