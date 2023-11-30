// Task component with Edit and Delete buttons
import React from 'react';

const Task = ({
  item,
  setCompleted,
  hide,
  handleDelete,
  handleEdit,
}) => {
  const id = `completed${item.id}`;

  const taskDisplayStyle =
    hide && item.isCompleted
      ? { display: 'none' }
      : item.isCompleted
      ? { pointerEvents: 'none' }
      : {};

  return (
    <li className="task__block" style={taskDisplayStyle}>
      <div className="task__modal">
        <div className="task__description">{item.description}</div>
        <div className="task__type">
          {item.type ? item.type.name : ''}
        </div>
      </div>
      <div className="task__row">
        <div
          style={item.isCompleted ? { pointerEvents: 'auto' } : {}}
          className="checkbox"
        >
          <input
            className="custom-checkbox"
            type="checkbox"
            id={id}
            name="completed"
            defaultChecked={item.isCompleted}
            onChange={() => setCompleted(item)}
          />
          <label className="task__title" htmlFor={id}></label>
        </div>
        <div
          className="task__title"
          style={{
            textDecoration: item.isCompleted ? 'line-through' : '',
          }}
        >
          {item.title}
        </div>
        <div className="task__buttons">
          {/* Düzenle butonu */}
          <button
            className="edit-button"
            onClick={() => handleEdit(item)}
          >
            Düzenle
          </button>

          {/* Sil butonu */}
          <button
            className="delete-button"
            onClick={() => handleDelete(item.id)}
          >
            Sil
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
