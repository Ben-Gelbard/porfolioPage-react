import React, { Component } from 'react';
import '../src/styles/App.css';
import { Content, Footer } from 'react-mdl';
import Main from './components/main.js'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Content>
          <div class="main-content">
            <Main>
              
            </Main>
          </div>
        </Content>
          <div class="footer">
            <Footer>

                        <Link to="/" class="buttons button1">home</Link>                        
                        <Link to="/aboutme" class="buttons button2">about me</Link>
                        <Link to="/projects" class="buttons button3">links.projects</Link>
                        <Link to="/resume" class="buttons button4">cv</Link>
                        <Link to="/contact" class="buttons button1">contact</Link>
                        <Link to="/music" class="buttons button2">music</Link>

            </Footer>
          </div>
      </div>
    );
  }
}

export default App;
