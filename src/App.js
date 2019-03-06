import React, { Component } from 'react';
import '../src/styles/App.css';
import '../src/styles/landing.css';
import { Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
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
            <Footer size="mini">
                <FooterSection type="left">
                    <FooterLinkList>
                        <Link to="/aboutme" class="button1">about me</Link>
                        <Link to="/projects">links.projects</Link>
                        <Link to="/resume">cv</Link>
                        <Link to="/contact">contact</Link>
                        <Link to="/music">music</Link>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
          </div>
      </div>
    );
  }
}

export default App;
