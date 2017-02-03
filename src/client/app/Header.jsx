import React from 'react';
import {render} from 'react-dom';
import SearchInput from './SearchInput.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(event) {
    this.props.onChange(event);
  }

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder" id="search-container">
              <SearchInput tags={this.props.tags} onChange={this.handleInput}/>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
