import React from 'react';
import { Pannellum } from "pannellum-react";

import { Dimensions } from 'react-native';
import './App.css'
class Photo extends React.Component{


    constructor(props) {
        super(props);
       
      }



render(){
    console.log('test');
    console.log(this.props);
    const myImage =this.props.name;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <Pannellum
      className="pannellum"
      width={windowWidth}
      height={windowHeight}
      image={myImage}
  
      autoLoad
  
    >
      
    </Pannellum>
        
    )
}



}

export default Photo;