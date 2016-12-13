import React from 'react';
import {render} from 'react-dom';
import Layout from './Layout.jsx';

if (!process.env.FLICKRAPIKEY) {
	console.log('NO API KEY!');
	process.exit(1);
}

render(<Layout/>, document.getElementById('app'));
