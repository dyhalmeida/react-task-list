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

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, tasks } = this.state;

    /** Verifica se a tarefa não é duplicada */
    if (tasks.indexOf(text) === -1) {
      const newTasks = [...tasks, text];
      this.setState({
        tasks: newTasks,
      });
    }
  }

  handleChangeInput = (e) => {
    const { value: text } = e.target;
    this.setState({ text });
  }

  handleClickDelete = (e, index) => {
    e.preventDefault();
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks,
      text: '',
    });
  }

  render() {
    const { text, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChangeInput} value={text} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <div>
                <FaEdit className="edit buttons-task" title={`Editar ${task}`} />
                <FaWindowClose
                  className="delete buttons-task"
                  title={`Excluir ${task}`}
                  onClick={(e) => { this.handleClickDelete(e, index); }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
