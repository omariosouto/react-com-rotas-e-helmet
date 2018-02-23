import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Sobre - React Router com Helmet</title>
          <meta name="theme-color" content="#FF0000"/>
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Página de Sobre</h1>
        </header>
        <p className="App-intro">
          <Link to="/">Ir para a página home \o/</Link>
          Exemplo de Página Sobre :)
        </p>
      </div>
    );
  }
}

export default Sobre;
