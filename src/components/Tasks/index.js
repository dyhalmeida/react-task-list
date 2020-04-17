import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Tasks.css';

export default function Tasks({ tasks, handleClickEdit, handleClickDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <div>
            <FaEdit
              className="edit buttons-task"
              title={`Editar ${task}`}
              onClick={(e) => handleClickEdit(e, index)}
            />
            <FaWindowClose
              className="delete buttons-task"
              title={`Excluir ${task}`}
              onClick={(e) => handleClickDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleClickEdit: PropTypes.func.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};
