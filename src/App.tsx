import * as React from 'react';
import Login from './pages/Login';
import Index from './pages/Index';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import font from './plugins/fontAwesome';
import { connect, DispatchProp } from 'react-redux';
import { store } from './store';
import Cart from './pages/Cart';
import Axios from 'axios';
import { login } from './store/me';

/** 引入图标 */
font();

/** 所有页面 */
const Register = () => <h1>Register</h1>;
/** 规定页面样式 */
const Content = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Main = styled.div`
	display: flex;
	flex-grow: 1;
`;

export interface AppProps extends DispatchProp {}

class App extends React.Component<AppProps> {
	constructor(props) {
		super(props);
		Axios.get('/api/me', {
			withCredentials: true
		})
			.then((res) => {
				this.props.dispatch(login(res.data));
			})
			.catch((error) => {
				console.log(error.response.data);
			});
	}
	render() {
		return (
			<Router>
				<Content>
					<Header />
					<Main>
						<Route exact path="/" component={Index} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/cart" component={Cart} />
					</Main>
					<Footer />
				</Content>
			</Router>
		);
	}
}

export default connect()(App);
