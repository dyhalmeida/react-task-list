import React, { Component } from 'react';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

/** Componente statefull - Com estado */
export default class Main extends Component {
  state = {
    text: '',
    tasks: [
      'Assistir séries',
      'Estudar inglês',
      'Estudar Javascript',
    ],
  }

  handleChangeInput = (e) => {
    const { value: text } = e.target;
    this.setState({ text });
  }

  render() {
    const { text, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#" className="form">
          <input type="text" onChange={this.handleChangeInput} value={text} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit buttons-task" title={`Editar ${task}`} />
                <FaWindowClose className="delete buttons-task" title={`Excluir ${task}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
