import React, { Fragment } from 'react'

class Sushi extends React.Component {
  
  	state = {
	  isEaten: false
  	};

	
	handleEat = () => {
		this.props.handleEat()
		this.setState({isEaten: true});
	}
	
	render() {
  	  return (
    	<div className="sushi">
      	  <div className="plate"
      	  	  id={this.props.id}
           	   onClick={this.props.onClick}>
        	{ 
          	  /* Tell me if this sushi has been eaten! */ 
          	  false ?
            	null
          	  :
            	<img src={this.props.img_url} width="100%" />
        	}
      	  </div>
      	  <h4 className="sushi-details">
        	{this.props.name} - ${this.props.price}
      	  </h4>
    	</div>
  	  )
  	}
}

export default Sushi
