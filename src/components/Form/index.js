import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './Form.css';

export default function Form({ text, handleSubmit, handleChangeInput }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChangeInput} value={text} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  text: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};
