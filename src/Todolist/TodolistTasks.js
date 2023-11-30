import React, { useState } from 'react';
import CompletedTask from '../components/CompletedTask';
import Task from '../components/Task';
import EditingForm from '../EditingForm';
import { useTodolistTasksContext } from './TodolistTasksProvider';

const TodolistTasks = () => {
  const { tasks, add, set, remove, handleEditTask } =
    useTodolistTasksContext();

  const [hide, setHide] = useState(false);
  const [editingTask, setEditingTask] = useState(false);

  const setCompleted = (task) => {
    handleEditTask({
      ...task,
      isCompleted: !task.isCompleted,
    });
  };

  const handleHide = () => {
    setHide(!hide);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask();
  };

  return (
    <div className="task">
      <div className="task__content container">
        <CompletedTask hide={hide} handleHide={handleHide} />
        <ul className="task__list">
          {tasks.map((item) => (
            <Task
              key={item.id}
              hide={hide}
              item={item}
              setCompleted={setCompleted}
              handleDelete={() => remove(item.id)}
              handleEdit={handleEdit}
            />
          ))}
        </ul>
        {editingTask && (
          <div>
            <EditingForm
              editingTask={editingTask}
              handleCancelEdit={handleCancelEdit}
              handleSaveEdit={(editedTask) => {
                handleEditTask(editedTask);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TodolistTasks;
