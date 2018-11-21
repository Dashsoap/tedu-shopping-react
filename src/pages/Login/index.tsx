import * as React from 'react';
import Header from '../../components/Header';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import './Login.styl';
import { Link } from 'react-router-dom';
const Container = styled.div`
	background: #bcbcbc;
	width: 100%;
`;

const Logo = styled.div`
	margin-top: 32px;
	margin-bottom: 24px;
	text-align: center;
	img {
		display: inline-block;
		width: 48px;
		height: auto;
	}
`;

export interface LoginProps extends RouteComponentProps {}

export interface LoginState {}

export default class Login extends React.Component<LoginProps, LoginState> {
	constructor(props: LoginProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return (
			<Container>
				<Logo>
					<Link to="/">
						<img src={require('../../assets/logo.svg')} />
					</Link>
				</Logo>
			</Container>
		);
	}
}
