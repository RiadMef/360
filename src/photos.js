import React from 'react';
import Photo from './photo';
import './App.css'

class Gallery extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            display: false,
            src: ''
        };
        this.handleClick = this.handleClick.bind(this);
      }




handleClick(e) {

    this.setState({src: e.target.src});

    this.setState({display: true});
  }


render(){
   
    if(!this.state.display){
    return(
        <div className='images'>
        <img  src={require('./images/photo.png')} />
        <img src={require('./images/lac.jpg')} onClick={this.handleClick}/>
        <img src={require('./images/manson.jpg')}onClick={this.handleClick} />
  
        </div>
   
    )}
    else{
        return <Photo name={this.state.src}></Photo>
    }
}



}

export default Gallery;