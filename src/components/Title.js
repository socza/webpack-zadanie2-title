import React from 'react';

class Title extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>Witamy w aplikacji {this.props.todoName}</p>
				<p>Liczba wszystkich zadań do wykonania to {this.props.todoData.length}</p>
			</div>
		);
	}
}

export default Title;