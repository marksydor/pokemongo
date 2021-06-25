import React from 'react';
import noImage from '../assets/no-image.jpg';

const PocemonInfo = (props) => {
	let stats = props.stats.map((s, i) => {
		return <div key={i} className="row">
			<div>{s.name}</div>
			<div>{s.stat}</div>
		</div>
	})

	let idTemplate = '#000';
	let idStr = idTemplate.substr(0, idTemplate.length - props.id.toString().length) + props.id.toString(); 
	return (
		<div className="pocemonInfoCard">
			<div>
				<img src={props.img ? props.img : noImage} alt={props.name}/>
			</div>
			<h2>{props.name} {idStr}</h2>
				<div className="statsTable">
					{/*<Types types={props.types}/>*/}
					{stats}
				</div>
			</div>
		)
}

export default PocemonInfo;