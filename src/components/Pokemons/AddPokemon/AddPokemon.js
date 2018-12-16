import React, {Component} from 'react';
import TextInputGroup from "../../UI/TextInputGroup/TextInputGroup";
import PokemonTypes from '../PokemonTypes';
import SelectBox from "../../UI/SelectBox/SelectBox";

class AddPokemon extends Component {

    state = {
        name: '',
        species: '',
        type: [],
        image: '',
        errors: {}
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {name,image,species, type} = this.state;

        if(name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }

        if(species === '') {
            this.setState({errors: {species: 'Species is required'}});
            return;
        }

        if(image === '') {
            this.setState({errors: {image: 'Image is required'}});
            return;
        }

        if(type.length === 0) {
            this.setState({errors: {type: 'Select at least one species'}});
            return;
        }


        this.setState({
            name: '',
            species: '',
            type: [],
            image: '',
            errors: {}
        });

        this.props.history.push('/');
    }

    onChange = (e) => {
        console.log(e);
    }

    selectboxHandler = (e) => {
        console.log(e);
    }


    render() {
        const {name,image,species, type} = this.state;

        const pokemonTypes = Object.keys(PokemonTypes);

        return (
            <div className={'card mb-3'}>
                <div className="card-header">Add Pokemon</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup
                            label={'Name'}
                            onChange={this.onChange}
                            value={name}
                            name={'name'}
                            placeholder={'Pokemon Name'}/>
                        <TextInputGroup
                            label={'Species'}
                            onChange={this.onChange}
                            value={species}
                            name={'species'}
                            placeholder={'Pokemon Species'}/>
                        <TextInputGroup
                            label={'Image'}
                            onChange={this.onChange}
                            value={image}
                            name={'image'}
                            placeholder={'Pokemon image'}/>
                        <SelectBox
                            onChange={this.selectboxHandler}
                            options={pokemonTypes}
                            name={'type'}
                            placeholder={'Pokemon Type'}/>
                        <input
                            type={'submit'}
                            value={'Add Pokemon'}
                            className={'btn btn-light btn-block'}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPokemon;