import React, { Component } from 'react';
import './styles/App.css';
import { Content, Footer } from 'react-mdl';
import Main from './components/main.js'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {  
    return (
      <div>
        <Content>
          <div className="main-content">
            <Main>
              
            </Main>
          </div>
        </Content>
          <div className="footer">
            <Footer>
{/* 
                        <Link to="/" className="buttons button1">home</Link>                        
                        <Link to="/aboutme" className="buttons button2">about me</Link>
                        <Link to="/projects" className="buttons button3">links.projects</Link>
                        <Link to="/resume" className="buttons button4">cv</Link>
                        <Link to="/contact" className="buttons button1">contact</Link>
                        <Link to="/music" className="buttons button2">music</Link> */}

            </Footer>
          </div>
      </div>
    );
  }
}

export default App;
