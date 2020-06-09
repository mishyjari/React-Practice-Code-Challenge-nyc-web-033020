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
	tableItems: [],
	tableMoney: 100
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
  	  const sushiId = Number(e.target.id || e.target.parentNode.id)
	  const sushiEaten = this.state.sushis.filter(sushi => sushi.id === sushiId )[0]
  	  const sushiIndex = this.state.sushis.indexOf(sushiEaten)
  	  if ((this.state.tableMoney - sushiEaten.price) >= 0){
  	  	  this.setState(prevState => ({
		  	  sushis: prevState.sushis.filter(sushi => sushi.id !== sushiId),
		  	  tableItems: [sushiEaten, ...prevState.tableItems],
		  	  tableMoney: prevState.tableMoney - sushiEaten.price
  	  	  }))
  	  	 }
  }

  render() {
  	  console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.returnFourSushis()} showMore={this.handleShowMore} handleEat={this.handleEatSushi} />
        <Table tableItems={this.state.tableItems} money={this.state.tableMoney} />
      </div>
    );
  }
}

export default App;
