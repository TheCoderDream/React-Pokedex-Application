import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Pokemons from "./components/Pokemons/Pokemons";
import AddPokemon from "./components/Pokemons/AddPokemon/AddPokemon";

import About from './pages/About';
import NotFound from './pages/NotFound';

import { Provider } from 'react-redux';
import store from './store/store';
import EditPokemon from "./components/Pokemons/EditPokemon/EditPokemon";


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar brand={'Pokedex'}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Switch>
                                <Route exact path={'/'} component={Pokemons} />
                                <Route exact path={'/pokemons/add'} component={AddPokemon}/>
                                <Route exact path={'/pokemons/edit/:id'} component={EditPokemon} />
                                <Route exact path={'/about'} component={About} />
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>

                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
