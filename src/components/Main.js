import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import './Main.css';

/** Componente statefull - Com estado */
export default class Main extends Component {
  state = {
    text: '',
  }

  handleChangeInput = (e) => {
    const { value: text } = e.target;
    this.setState({ text });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#" className="form">
          <input type="text" onChange={this.handleChangeInput} value={text} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
