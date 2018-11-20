import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme';

const Base = styled.button`
	background: ${(props) => colors[props.color]};
	font-size: 1rem;
	border: 1px solid ${(props) => colors[props.color]};
	color: ${(props) => (props.color === 'default' ? colors.default : '#fff')};
	outline: none;
	padding: .5em 1em;
	border-radius: 2em;
	cursor: pointer;

	& + & {
		margin-left: .5em;
	}
	&.flat {
		background: transparent;
		color: ${(props) => colors[props.color]};
	}
`;

export interface ButtonProps {
	color?: 'primary' | 'success' | 'danger' | 'default';
	flat?: boolean;
	onClick?: React.MouseEventHandler;
}

export interface ButtonState {}

export default class Button extends React.Component<ButtonProps, ButtonState> {
	constructor(props: ButtonProps) {
		super(props);
		this.state = {};
	}

	onClick = (e: React.MouseEvent) => {
		if (this.props.onClick) {
			e.preventDefault();
			this.props.onClick(e);
		}
	};

	public render() {
		return (
			<Base color={this.props.color || 'default'} className={this.props.flat ? 'flat' : ''} onClick={this.onClick}>
				{this.props.children}
			</Base>
		);
	}
}
