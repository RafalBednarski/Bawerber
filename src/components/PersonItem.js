import React from 'react';


class PersonItem extends React.Component {

	state = {
		bundesland: ''
	}

	findBundesland = (event) => {
		fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=<${event.target.value}>&key=AIzaSyA0_RX0dGc9h-VuKjQlsTCeT-yZ1HR3u50`)//fetch with value of the clicked button
		.then(resp => resp.json())
		.then(resp => {
			const thisBundesland = resp.results[0].address_components.filter(obj => { //filter response to only object with first element of the types property array === 'administrative_area_level_1'
				return obj.types[0] === 'administrative_area_level_1';						// and assign it to variable
			})
			this.setState({
				bundesland: thisBundesland[0].long_name //set state to long_name property of the object with first element of the types property array === 'administrative_area_level_1'
			})
		})
	}

	render() {
		return (
		<div>
			<h3>{this.props.name}</h3>
			<p>{this.props.str}</p>
			<p>{this.props.pstCode} {this.props.town}</p>
			<button value={this.props.town} onClick={this.findBundesland}>check Bundesland</button>
			<p>Bundesland of this town is: {this.state.bundesland}</p>
		</div>
		)
	}	
}

export default PersonItem;