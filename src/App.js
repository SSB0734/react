import React,{Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';

class App extends Component{
constructor(props){
  super(props);
}

  render(){
    return(
      <Main />
    );
  }
}

export default App;
