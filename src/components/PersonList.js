import React from 'react';
import PersonItem from '../components/PersonItem';
var data = require('../data/testdaten.json');

const PersonList = () => {
	return (
		<div>{data.map(person => {
			return <PersonItem key={person.name + person.pstCode} name={person.name} str={person.str} pstCode={person.pstCode} town={person.town} />
		})}</div> // passing the props with all nedded data to child PersonItem component
	)
}
 
export default PersonList;
