import React, { Component } from 'react';
import './Main.css';

/** Componente statefull - Com estado */
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    const { value } = e.target;
    this.setState({
      text: value,
    });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input type="text" onChange={this.handleChangeInput} />
          <button type="submit">Inserir</button>
        </form>
        <p>{text}</p>
      </div>
    );
  }
}
