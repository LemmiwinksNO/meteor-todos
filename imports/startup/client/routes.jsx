import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import ListContainer from '../../ui/containers/ListContainer.jsx';

export const renderRoutes = () => (
	<Router history={browserHistory}>
		<Route path="/" component={ListContainer} />
	</Router>
);
