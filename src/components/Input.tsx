import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme';

const MyInput = styled.input`
	outline: none;
	margin-top: 5px;
	margin-bottom: 15px;
	padding: .3em .5em;
	box-sizing: border-box;
	border: 1px solid #d1d5da;
	border-radius: 3px;
	font-size: 16px;
	transition: all .3s ease-out;

	&:focus {
		border-color: ${colors.primary};
	}

	&.block {
		display: block;
		width: 100%;
	}
`;

export interface InputProps {
	type?: string;
	placeholder?: string;
	block?: boolean;
	onChange?: React.ChangeEventHandler;
	value?: string;
	name?: string;
}

export interface InputState {}

export default class Input extends React.Component<InputProps, InputState> {
	constructor(props: InputProps) {
		super(props);
		this.state = {};
	}

	public render() {
		const { type, placeholder } = this.props;
		return (
			<MyInput
				className={this.props.block ? 'block' : ''}
				type={type}
				placeholder={placeholder}
				onChange={this.props.onChange}
				value={this.props.value}
				name={this.props.name}
			/>
		);
	}
}
