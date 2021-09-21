import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class AppFunction extends React.Component{
  state  = {lattitude: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position =>  this.setState({lattitude: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})    
    );
  }

  renderContent() {
    if(this.state.errorMessage && !this.state.lattitude){

      return(
        <div>Error: {this.state.errorMessage}</div>
      );
    }
    if(!this.state.errorMessage && this.state.lattitude){
        return <SeasonDisplay  lat={this.state.lattitude}/>
    }
    
    return <Spinner />
  }

  render() {
    return(
      <div className="border red">
        {this.renderContent()}  
      </div>
    );
  }
}

ReactDOM.render(
  <AppFunction/>
  ,
  document.getElementById('root')
);
