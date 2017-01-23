import React from 'react';
import { render } from 'react-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleSidebar() {
    let d = document.querySelector('.mdl-layout');
    d.MaterialLayout.toggleDrawer();
  }

  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Photo Gallery</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" onClick={this.toggleSidebar} href="#search" htmlFor="search">Search</a>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
