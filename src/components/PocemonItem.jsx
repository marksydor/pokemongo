import React, { useState } from 'react';
import noImage from '../assets/no-image.jpg';

export const TagItem = (props) => {
	const [active, setActive] = useState(true);

	const onActiveClick = () => {
		props.active();
		setActive(false)
		props.loadNewPokemonsByTags();
	}

	const onNotActiveClick = () => {
		props.notActive();
		setActive(true)
		props.loadNewPokemonsByTags();
	}

	if (!props.active || !props.notActive || !props.loadNewPokemonsByTags)
		return <div className={`tag ${props.name}`}> {props.name} </div>

	return <>{active 
		? <div className={`tag ${props.name}`} onClick={onActiveClick}> {props.name} </div>
		: <div className={`tag White`} onClick={onNotActiveClick}> {props.name} </div> }</>
}


export const PocemonItem = (props) => {
	const tags = props.types.map((t) => {
		return <TagItem name={t.type.name} key={t.slot}  />
	})
	return (<div className="pocemonItem"
		onClick={() => props.setInfo(props.id)}>
			<img src={props.img ? props.img : noImage} alt={props.name}/>
			<h3>{props.name}</h3>
			{tags}
		</div>)
}

export const Types = (props) => {
	let typesStr = props.types[0].type.name;
	if (props.types.length > 1) {
		for(let i = 1; i < props.types.length; i++)
			typesStr += `, ${props.types[i].type.name}`;
		return <><div>Types</div><div>{typesStr}</div></>
	}
	return <><div>Type</div><div>{typesStr}</div></>

}
