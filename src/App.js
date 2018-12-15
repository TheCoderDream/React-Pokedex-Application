import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Pokemons from "./components/Pokemons/Pokemons";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Navbar brand={'Pokedex'}/>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <Pokemons/>
              </div>
            </div>

          </div>
        </React.Fragment>
    );
  }
}

export default App;
