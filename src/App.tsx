import * as React from 'react';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import font from './plugins/fontAwesome';

font();

/** 所有页面 */
const Index = () => <h1>Index</h1>;

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

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Content>
					<Header></Header>
					<Main>
						<Route exact path="/" component={Index} />
						<Route path="/login" component={Login} />
					</Main>
					<Footer />
				</Content>
			</Router>
		);
	}
}
