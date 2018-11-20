import * as React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';

const Container = styled.div``;

export interface LoginProps extends RouteComponentProps {}

export interface LoginState {}

export default class Login extends React.Component<LoginProps, LoginState> {
	constructor(props: LoginProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return <div>{this.props.match.path}</div>;
	}
}
