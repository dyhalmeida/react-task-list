import React, { Component } from 'react';

import './Main.css';
import Form from './Form';
import Tasks from './Tasks';

/** Componente statefull - Com estado */
export default class Main extends Component {
  state = {
    text: '',
    tasks: [],
    index: -1,
  }

  /**
   * Método executa quando o componente é renderizado
   */
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!tasks) return;
    this.setState({
      tasks,
    });
  }

  /**
   * Método executa a cada atualização de estado do componente
   * prevState: Estado anterior do componente
   */
  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;
    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
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

        <Form
          text={text}
          handleSubmit={this.handleSubmit}
          handleChangeInput={this.handleChangeInput}
        />

        <Tasks
          tasks={tasks}
          handleClickEdit={this.handleClickEdit}
          handleClickDelete={this.handleClickDelete}
        />

      </div>
    );
  }
}
