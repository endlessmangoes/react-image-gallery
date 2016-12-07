/* Search component File */
// search input
import React from 'react';

class SearchInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) {
		console.info('Value');
		console.log(event.target.value);

		let url = 'https://api.flickr.com/services/feeds/photos_public.gne';
		// basic user validation
		if (!event.target.value) {
			return false;
		}

		url = url + '?' + event.target.value;

		$.get(url).then(function(data) {
		  debugger;
		})
		.catch(function(error) {
		  console.log('Issue trying to get..: ' + error.message);
		});
	}

  render() {
    return (
			 <input className="mdl-textfield__input" type="text" name="search" id="search" onChange={this.handleInput}></input>
    );
  }
}

export default SearchInput;
