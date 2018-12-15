import React, {Component} from 'react';
import Pokemon from "./Pokemon/Pokemon";

class Pokemons extends Component {

    state = {
        pokemons: [
            {
                id: 1,
                name: 'Bulbasaur',
                species: 'Seed Pokémon',
                image: 'app/shared/images/bulbasaur.jpg',
                type: [
                    'Grass',
                    'Poison'
                ],
                height: '2′4″ (0.71m)',
                weight: '15.2 lbs (6.9 kg)',
                abilities: [
                    'Overgrow',
                    'Chlorophyll'
                ],
                stats: {
                    hp: 45,
                    attack: 49,
                    defense: 49,
                    'sp.atk': 65,
                    'sp.def': 65,
                    speed: 45,
                    total: 318
                },
                evolution: [
                    'Bulbasaur',
                    'Ivysaur',
                    'Venusaur'
                ]
            },
            {
                id: 2,
                name: 'Ivysaur',
                image: 'app/shared/images/ivysaur.jpg',
                species: 'Seed Pokémon',
                type: [
                    'Grass',
                    'Poison'
                ],
                height: '3′3″ (0.99m)',
                weight: '28.7 lbs (13.0 kg)',
                abilities: [
                    'Overgrow',
                    'Chlorophyll'
                ],
                stats: {
                    hp: 60,
                    attack: 62,
                    defense: 63,
                    'sp.atk': 80,
                    'sp.def': 80,
                    speed: 60,
                    total: 405
                },
                evolution: [
                    'Bulbasaur',
                    'Ivysaur',
                    'Venusaur'
                ]
            }
        ]
    };


    render() {
        const {pokemons} = this.state;

        return (
            <div className={'row'}>
                    {pokemons.map(pokemon => (
                        <div className={'col-md-4'}>
                            <Pokemon key={pokemon.id} {...pokemon}/>
                        </div>
                    ))}

            </div>
        );
    }
}

export default Pokemons;