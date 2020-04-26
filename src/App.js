import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        manager: '',
        players: []

      };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    this.setState({ manager });
    const players = await lottery.methods.getPlayers().call();
    this.setState({ players });    
  }

 render() {

    return (
      <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {this.state.manager}</p>
      <p>The players entered are {this.state.players}</p>
      </div>
    );
  }
}
export default App;
