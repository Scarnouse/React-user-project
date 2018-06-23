import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.css';

class Card extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return(
			<div className="Card">
				<img 
					src={this.props.avatar}
					className="Card-img"	
				/>
				<p className="Card-text">{this.props.firstName}</p>
				<p className="Card-text">{this.props.lastName}</p>
			</div>
		)
	}
}

Card.propTypes = {
	id: PropTypes.number.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
}

export default Card;