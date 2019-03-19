import React, { Component } from 'react';
import '../styles/landing.css';

class LandingPage extends Component {

    render() {
        return(
           
      <div className="grid">

      <div className="inner-grid">
          <div className="main-grid">
              <div className="rectangle rectangle1"></div>
              <div className="rectangle rectangle2"></div>
              <div className="rectangle rectangle3"></div>
              <div className="rectangle rectangle4"></div>
              <div className="rectangle rectangle5"></div>
              <div className="rectangle rectangle6"></div>
              <div className="rectangle rectangle7"></div>
              <div className="rectangle rectangle8"></div>
              <div className="rectangle rectangle9"></div>
              <div className="rectangle rectangle10"></div>
              <div className="rectangle rectangle11"></div>
              <div className="rectangle rectangle12"></div>
              <div className="rectangle rectangle13"></div>
              <div className="rectangle rectangle14"></div>
              <div onClick={this.clicked} className="rectangle rectanglelink rectangle15">

              </div>

              <div>
        
      </div>
              <div className="name">benGelbard</div>

          </div>

      </div>
          
  </div>
        )
    }
    clicked=function(){
        console.log('you clicked me');
        
    }
}

export default LandingPage

        //       {
        //   this.state.showMenu
        //     ? (
        //       <div className="menu">
        //         <button> home </button>
        //         <button> about me </button>
        //         <button> links.projects </button>
        //         <button> resume </button>
        //         <button> contact </button>
        //         <button> music </button>
        //       </div>
        //     )
        //     : (
        //       null
        //     )
        // }    
    //     constructor() {
    //     super();

    //     this.state = {
    //         showMenu: false,
    //     }
    //     this.showMenu = this.showMenu.bind(this);
    //     this.closeMenu = this.closeMenu.bind(this);
    // }

    // showMenu(event) {
    //     event.preventDefault();

    //         this.setState({
    //             showMenu: true,
    //         }, () => {
    //               document.addEventListener('click', this.closeMenu);
    //         })
    // }

    // closeMenu(event) {
    //     this.setState({ showMenu:false }, () => {
    //         document.removeEventListener('click', this.closeMenu);
    //     })
    // }
    