import * as React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../../theme';
import axios from 'axios';
import { connect, DispatchProp } from 'react-redux';
import Cookie from 'js-cookie';
const Container = styled.div`
	background: #f9f9f9;
	width: 100%;
	h1 {
		text-align: center;
		font-weight: 400;
		font-size: 24px;
	}
	a {
		color: ${colors.primary};
		text-decoration: none;
	}
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

const LoginBox = styled.form`
	margin: 1rem auto 0 auto;
	background: #fff;
	border: 1px solid #d8dee2;
	width: 266px;
	padding: 1em;
	label {
		display: block;
		font-size: 14px;
		text-align: justify;
		.password-label {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
	Button {
		display: block;
		width: 100%;
		margin-top: 1.5em;
	}
`;

const RegisterBox = styled.div`
	border: 1px solid #d8dee2;
	width: 266px;
	padding: 1em;
	margin: 1em auto 0;
	text-align: center;
`;

export interface LoginProps extends RouteComponentProps, DispatchProp {}

export interface LoginState {
	username: string;
	password: string;
}
class Login extends React.Component<LoginProps, LoginState> {
	constructor(props: LoginProps) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	onSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/login', this.state);
			Cookie.set('token', res.data.token);
			this.props.history.push('/');
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			username: e.target.value
		});
	};

	onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			password: e.target.value
		});
	};

	public render() {
		return (
			<Container>
				<Logo>
					<Link to="/">
						<img src={require('../../assets/logo.svg')} />
					</Link>
				</Logo>
				<h1>登录膜法商城</h1>
				<LoginBox onSubmit={this.onSubmit}>
					<label>
						请输入您的用户名
						<Input block onChange={this.onUsernameChange} />
					</label>
					<label>
						<div className="password-label">
							<span>请输入您的密码</span>
							<Link to="/forget/password">忘记密码?</Link>
						</div>
						<Input type="password" block onChange={this.onPasswordChange} />
					</label>
					<Button color="primary">立即登录</Button>
				</LoginBox>
				<RegisterBox>
					新用户 <Link to="/register">立即注册</Link>
				</RegisterBox>
			</Container>
		);
	}
}

export default connect()(Login);
