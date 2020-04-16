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
    index: -1,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { text, tasks, index } = this.state;

    /** Verifica se a tarefa é duplicada */
    if (tasks.indexOf(text.trim()) !== -1) return;

    const newTasks = [...tasks];

    /** Inclusão */
    if (index === -1) {
      this.setState({
        tasks: [...newTasks, text.trim()],
        text: '',
      });
      return;
    }

    /** Edição */
    newTasks[index] = text.trim();
    this.setState({
      tasks: newTasks,
      text: '',
      index: -1,
    });
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
    });
  }

  handleClickEdit = (e, index) => {
    e.preventDefault();
    const { tasks } = this.state;
    this.setState({
      index,
      text: tasks[index],
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
                <FaEdit
                  className="edit buttons-task"
                  title={`Editar ${task}`}
                  onClick={(e) => this.handleClickEdit(e, index)}
                />
                <FaWindowClose
                  className="delete buttons-task"
                  title={`Excluir ${task}`}
                  onClick={(e) => this.handleClickDelete(e, index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
