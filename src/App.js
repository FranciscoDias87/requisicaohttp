/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nutri: []
    };
  }

  componentDidMount() {
    let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
    fetch(url) //recebe dados do link da api
      .then((res) => res.json()) //se recebeu certo, converte para json
      .then((json) => { //se teve sucesso na conversao, popula a state
        let state = this.state;
        state.nutri = json;
        this.setState(state);
        console.log(json);
      })
  }

  render() {
    return (
      <div className='container'>
        <header>
          <strong >React Nutri</strong>
        </header>

        {this.state.nutri.map((item) => { //mapeia o arrei nutri
          return (
            <article className="post" key={item.id} >
              <strong className="titulo">{item.titulo}</strong>
              <img className="capa" src={item.capa} alt={item.titulo} />
              <p className="subtitulo">{item.subtitulo}</p>
              <a className="botao" href="#">Acessar </a>
            </article>
          );
        })}
      </div>
    );
  }
}

export default App;
