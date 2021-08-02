import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './Form.Components/LoginForm';
import RegisterForm from './Form.Components/RegisterForm';
import ListadoForm from './Form.Components/ListadoForm';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/"
					component={LoginForm} />
				<Route
					exact
					path="/login"
					component={LoginForm} />
				<Route
					exact
					path="/register"
					component={RegisterForm} />
				<Route
					exact
					path="/taskList"
				>
					<ListadoForm token='hola'/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
 
export default App;