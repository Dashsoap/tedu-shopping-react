import * as React from 'react';
import { connect } from 'react-redux';
import { User } from '../../store/me';

export interface CartProps {
	me: User;
}

class Cart extends React.Component<CartProps, any> {
	public render() {
		return <div>{JSON.stringify(this.props.me)}</div>;
	}
}

const mapState2Props = (state) => {
	return {
		me: state.me
	};
};

export default connect(mapState2Props)(Cart);
