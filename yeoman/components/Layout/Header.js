/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';
import Search from './Search';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row ${s.row}`}>
          <Link className={`mdl-layout-title ${s.title}`} to="/">
            Photo Gallery
          </Link>
          <div className={`mdl-layout-spacer`}></div>
					<div className={`mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right`}>
						<label className={`mdl-button mdl-js-button mdl-button--icon`} htmlFor="search">
							<i className={`material-icons`}>search</i>
						</label>
						<div className={`mdl-textfield__expandable-holder`} id="search-container">
							<Search />
						</div>
					</div>
          <Navigation />
        </div>
      </header>
    );
  }

}

export default Header;
