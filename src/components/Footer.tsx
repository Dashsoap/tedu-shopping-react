import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme';

const Container = styled.div`
	color: ${colors.default};
	text-align: center;
	padding: 1em;
`;

export interface FooterProps {}

export interface FooterState {}

export default class Footer extends React.Component<FooterProps, FooterState> {
	constructor(props: FooterProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return <Container>&copy;2018 Magic of HAAAA</Container>;
	}
}
