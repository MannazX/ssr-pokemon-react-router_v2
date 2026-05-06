import React from 'react';
import PokeImg from './Poké_Ball_icon.svg.png';

function Front() {
    return (
        <div className='container text-center'>
            <div className='Logo text-white'>
                Pokémon Finder App using React Router v7 Framework Mode and React 19<br></br>
                Data is fetched from: <br></br> https://pokeapi.co/
            </div>
            <div className='max-w-md mx-auto mb-4'>
                <img src={PokeImg} width="450" height="450"/>
            </div>
            <div className='Logo2 mt-5 text-white'>By mas019</div>
        </div>
    )
}

export default Front;