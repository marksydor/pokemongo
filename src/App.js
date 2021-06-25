import React, {useState, useEffect} from 'react';
import './App.css';
import {api} from  './api.js';

import PocemonInfo from './components/PocemonInfo.jsx';
import { TagItem, PocemonItem, Types } from './components/PocemonItem.jsx'
import Preloader from './components/Preloader.jsx';

const loadPocemons = (limit, Offset, Exeptions, setInfo) => {
	return api.getPocemons(limit, Offset, Exeptions)
		.then(response => {
			console.log(response)
			return response.pokemons.map((p) => {
				return <PocemonItem {...p} key={p.id} setInfo={setInfo}/>
			})
		})
}

function App() {
	const [pocemonItems, setPocemonItems] = useState();
	const [pocemonInfo, setPocemonInfo] = useState();
	const [tags, setTags] = useState();
	const [Offset, setOffset] = useState(12);
	const [tagsExceptions, setTagsException] = useState([]);
	const [loadIsFetching, setLoadIsFetching] = useState(false)
	

	// loads new pokemons when tags changed 
	const loadNewPokemonsByTags = async () => {
		setLoadIsFetching(true);
		let newItems = await loadPocemons(12, 0, tagsExceptions, setInfo);
		setPocemonItems(newItems);
		setOffset(newItems[newItems.length-1].key);
		setLoadIsFetching(false);
	}

	// sets info about current pokemon in sidebar
	const setInfo = async (id) => {
		setPocemonInfo(await api.getPocemonInfo(id))
	}

	const addtagsException = (tag) => {
		let newExpetions = tagsExceptions;
		newExpetions.push(tag);
		setTagsException(newExpetions);
	}

	const deletetagsException = (tag) => {
		let newExpetions = tagsExceptions;
		for(let i = 0; i < newExpetions.length; i++)
			if (newExpetions[i] === tag)
				newExpetions.splice(i, 1);
		setTagsException(newExpetions);
	}

	// loads additional pokemons
	const loadMore = async () => {
		setLoadIsFetching(true);
		let newItems = await loadPocemons(12, Offset, tagsExceptions, setInfo);
		setPocemonItems([...pocemonItems, ...newItems]);
		setOffset(newItems[newItems.length-1].key);
		setLoadIsFetching(false);
	}

	useEffect(async () => {
			setPocemonItems(await loadPocemons(12, 0, [], setInfo))
		api.getTags()
			.then(response => {
				setTags(response.map((t, i) => {
					return (
						<TagItem name={t.name} key={i} 
						active={() => addtagsException(t.name)}
						notActive={() => deletetagsException(t.name)}
						loadNewPokemonsByTags={() => loadNewPokemonsByTags()}/>)
		 		}))
			})
	}, [])

	return (
		<div>
			<header className="pokedexHeader"><h1>Pokedex</h1></header>
			<div className="wrapper">
				<div className="infoTags">{tags}</div>
				<div className="pocemonsList">
					{!loadIsFetching && pocemonItems}
					{loadIsFetching && <Preloader />}
					{ !loadIsFetching
						? <button className="loadMore" onClick={loadMore}><h2>Load More</h2></button>
						: <button className="loadMore Dis" disabled><h2>Load More</h2></button>
					}
				</div>
				<div className="pocemonInfo">
					{pocemonInfo && <PocemonInfo {...pocemonInfo}/>}
				</div>
			</div>
		</div>
	);
}

export default App;
