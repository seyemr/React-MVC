import React, { useState } from 'react';
import { useTodolistTasksContext } from '../Todolist/TodolistTasksProvider';
import noEye from '../image/noEye.png';
import eye from '../image/eye.png';

const CompletedTask = ({ hide, handleHide }) => {
  const { tasks } = useTodolistTasksContext();

  const count = tasks.reduce(
    (acc, item) => (item.isCompleted ? acc + 1 : acc),
    0
  );

  return (
    <div className="completed">
      <div className="completed__count">
        <div
          style={{ width: '10px', marginRight: '3px' }}
          className="completed__text"
        >
          {count}
        </div>
        Tamamlanmış
      </div>
      <div
        className="completed__hiden"
        style={{ backgroundColor: 'black' }}
        onClick={handleHide}
      >
        <img
          style={{ width: '44px', height: '40px' }}
          src={hide ? eye : noEye}
          alt="hiden"
        />
        <span className="button-active" style={{ color: 'white' }}>
          {hide ? 'Göster' : 'Gizle'}
        </span>
      </div>
    </div>
  );
};

export default CompletedTask;
