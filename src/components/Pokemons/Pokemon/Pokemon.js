import React from 'react';
import PropTypes from 'prop-types';
import PokemonTypes from "./PokemonTypes";

import './Pokemon.css';

const PokemonTypeButton = ({type, typeName}) => <button  type="button" className={type}>{typeName}</button>;


const Pokemon = (
    {
        name,
        image,
        species,
        type
    }
) => {


    console.log(type.map(el => console.log(PokemonTypes[el])));
    const typesMap = type? type.map(typ => <PokemonTypeButton type={PokemonTypes[typ]} typeName={typ}/>): null;

    return (
        <div className={'card poke-row text-center'}>
            <div className="row text-center text-white">
                <img

                    alt={name} className="rounded mx-auto d-block poke-img poke-img-size"/>
            </div>
            <div className="card-block">
                <h3 className="card-title">{name}</h3>
                <p className="card-text text-center"><b>Species: </b>{species}</p>
            </div>
            {typesMap}
            <span className="card-link" hidden><i className="fa fa-pencil"></i></span>
            <span className="card-link text-warning">
                             <i className="fa fa-info-circle fa-2x"></i></span>
            <span className="card-link text-danger"><i className="fa fa-trash-o fa-2x"></i></span>
        </div>
    );
};

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    type: PropTypes.array.isRequired
};


export default Pokemon;