import React from 'react'
import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
})

const capitalizeFirstChar = (str) => str[0].toUpperCase() + str.slice(1);
const smallLetterFirstChar = (str) => str[0].toLoverCase() + str.slice(1);

export const api = {
	getPocemons: async (limit = 12, offSet = '0', expeptions) => {
		let results = [];		
		let count = await instance.get('pokemon');
		count = count.data.count;
		let i = 1 + parseInt(offSet);
		for( ; i < count && results.length < limit; i++) {
			console.log('->',i)
			let pocemon = await instance.get(`pokemon/${i}/`);
			let add = true;
			let types = pocemon.data.types.map((t) => {
				return {...t, type: {...t.type, name: capitalizeFirstChar(t.type.name)}};
			})
			for(let j = 0; j < types.length && add; j++) {
				for(let t = 0; t < expeptions.length && add; t++) {
					if (types[j].type.name === expeptions[t]) {
						add = false;
					}
				}
			}
			
			if (add)
				results.push({
					name: capitalizeFirstChar(pocemon.data.name),
					types: types,
					img: `https://pokeres.bastionbot.org/images/pokemon/${i}.png`,
					id: i
				});
		}
		return { offSet: i-1, pokemons: [...results], };
	},
	getPocemonsByTypes: async (limit = 12, offSet = 0, expeptions) => {
		// console.log(expeptions);
		const firstResponse = await instance.get(`pokemon/?limit=${limit}&offset=${offSet}`);
		const pocemonsNames = firstResponse.data.results.map((p) => {
			return ({...p, name: capitalizeFirstChar(p.name)});
		})
		const pocemonsTypesAndImg = await Promise.all(pocemonsNames.map(async (p) => {
			let id = p.url.split('/');
			id = id[6];
			let secondResponse = await instance.get(`pokemon/${id}/`);
			let types = secondResponse.data.types.map((t) => {
				return {...t, type: {...t.type, name: capitalizeFirstChar(t.type.name)}};
			})
			let img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
			return ({types, img, id})
		}))


		let pocemonsResult = []
		for(let i = 0; i < limit; i++) {
			pocemonsResult.push({...pocemonsNames[i], ...pocemonsTypesAndImg[i]})
		} 
		return (pocemonsResult);
	},
	getPocemonInfo: async (id) => {
		let info = await instance.get(`pokemon/${id}/`);
		let img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
		let stats = info.data.stats.map((s) => {
			let capName = s.stat.name;
			console.log(capName);
			if (capName.indexOf('special-') >= 0){
				capName = capName.slice(8);
				capName = 'SP ' + (capName[0].toUpperCase() + capName.slice(1));
			}
			return {stat: s.base_stat, name: capitalizeFirstChar(capName)}
		})
		stats.push({stat: info.data.moves.length, name: 'Total moves'})
		stats.push({stat: info.data.weight, name: 'Weight'})
		let typesTosend = info.data.types.map((t) => {
			return {...t, type: {...t.type, name: capitalizeFirstChar(t.type.name)}};
		})
		let data = {
			types: typesTosend,
			stats: stats,
			name: capitalizeFirstChar(info.data.name),
			id: id
		}
		return ({...data, img});
	},
	getTags: async () => {
		return instance.get(`type`)
			.then((response) => {
				return response.data.results.map((t) => {
					return ({...t, name: capitalizeFirstChar(t.name)})
				})
			})
	}
}