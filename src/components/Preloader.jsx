import React from 'react';
import preloaderSVG from '../assets/pokemon.svg';

const Preloader = () => {
	return (<div className={'loading'}>
		<img src={preloaderSVG} alt="loading"/>
		</div>);
}

export default Preloader;