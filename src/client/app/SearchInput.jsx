import React from 'react';

// search input component: on input, passes the value to parent component.
class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.onChange(event.target.value);
  }

  render() {
  	return (<input className='mdl-textfield__input' type="text" name="search" id="search" onChange={this.handleInput}/>);
  }
}

export default SearchInput;
