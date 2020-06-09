// Begin
import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
	sushis: [],
	startIndex: 0,
	  tableItems: []
  }

  componentDidMount(){
	fetch("http://localhost:3000/sushis")
	  .then( res => res.json() )
	  .then( sushis => this.setState({sushis}))
  }

  returnFourSushis = () => {
	const index = this.state.startIndex;
	return this.state.sushis.slice(index,index + 4)
  }
  
  handleShowMore = () => {
	this.setState(prevState => ({ startIndex: prevState.startIndex + 4 }) )
  }

  handleEatSushi = e => {
	  const sushiEaten = this.state.sushis.filter(sushi => sushi.id == e.target.id)
	  console.log(sushiEaten)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.returnFourSushis()} showMore={this.handleShowMore} handleEat={this.handleEatSushi} />
        <Table />
      </div>
    );
  }
}

export default App;
