import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import Layout from './Layout.jsx';

if (!process.env.FLICKRAPIKEY) {
	console.log('NO API KEY!');
	process.exit(1);
}

render(<Layout/>, document.getElementById('app'));

render(<Router>
        <Route path="/" component={ Home }/>
        <Route path="/search" component={ SearchablePhotoGrid }/>
    </Router>,
	)
