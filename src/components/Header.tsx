import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../theme';

import Button from './Button';
import { withRouter, RouteComponentProps } from 'react-router';

const Container = styled.div`
	height: 60px;
	border: 2px solid #efefef;
	display: flex;
	align-items: center;
	padding: 0 20px;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	img {
		display: inline-block;
		height: 2em;
		margin-right: 5px;
		width: auto;
	}
	h1 {
		font-weight: 400;
		font-size: 1.6rem;
	}
`;

const SearchInput = styled.div`
	position: relative;
	margin-left: 2em;
	input {
		border: 1px solid #bcbcbc;
		max-width: 5em;
		font-size: 1rem;
		border-radius: 2em;
		transition: .3s ease-in-out;
		outline: none;
		padding: .5em 1em;
		&:focus {
			border-color: ${colors.primary};
			max-width: 10em;
			& + .icon {
				color: ${colors.primary};
			}
		}
	}
	.icon {
		position: absolute;
		right: .8em;
		top: 50%;
		transform: translateY(-50%);
	}
`;

const ButtonGroup = styled.div`margin-left: auto;`;

export interface HeaderProps extends RouteComponentProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
	constructor(props: HeaderProps) {
		super(props);

		this.state = {};
	}

	/** 用户点击登录按钮 */
	onLogin = (e: React.MouseEvent) => {
		this.props.history.push('/login');
	};

	/** 用户点击注册按钮 */
	onRegister = (e: React.MouseEvent) => {
		this.props.history.push('/register');
	};

	/** 判断在当前路由下是否显示Header */
	get visible() {
		const pathList = [ '/login', '/register' ];
		return !pathList.includes(this.props.location.pathname);
	}

	public render() {
		return (
			this.visible && (
				<Container>
					<Logo>
						<img src={require('../assets/logo.svg')} />
						<h1>膜法商城</h1>
					</Logo>
					<SearchInput>
						<input placeholder="搜索..." />
						<FontAwesomeIcon className="icon" icon="search" />
					</SearchInput>
					<ButtonGroup>
						<Button color="primary" flat onClick={this.onRegister}>
							<span style={{ marginRight: '.3em' }}>注册</span>
							<FontAwesomeIcon icon="registered" />
						</Button>
						<Button color="primary" onClick={this.onLogin}>
							登录
						</Button>
					</ButtonGroup>
				</Container>
			)
		);
	}
}

export default withRouter(Header);
