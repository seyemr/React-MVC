import React, { createContext, useContext, useState } from 'react';
import { saveAs } from 'file-saver';

export const Context = createContext({
  name: 'TodolistTasks',
});

const addId = (tasks, task) => ({
  id: tasks.length + 1,
  isCompleted: false,
  ...task,
});

const isAlreadyAdded = (tasks, newTasks) => {
  return tasks.some((task) => {
    return (
      task.title === newTasks.title &&
      task.description === newTasks.description
    );
  });
};

const TodolistTasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const tasksFromLocalStorage = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      try {
        let object = JSON.parse(localStorage.getItem(key));

        if (object) {
          tasksFromLocalStorage.push(object);
        }
      } catch (error) {
        console.error(
          `Error parsing localStorage item with key ${key}`,
          error
        );
      }
    }
    return tasksFromLocalStorage;
  });

  // yeni görev ekleme
  const addTasks = (newTasks) => {
    if (!isAlreadyAdded(tasks, newTasks)) {
      const newTask = addId(tasks, newTasks);
      localStorage.setItem(
        `task${newTask.id}`,
        JSON.stringify(newTask)
      );
      setTasks([...tasks, newTask]);
    }
  };

  const setCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const updatedTask = {
            ...task,
            isCompleted: !task.isCompleted,
          };
          localStorage.setItem(
            `task${id}`,
            JSON.stringify(updatedTask)
          );
          return updatedTask;
        }
        return task;
      })
    );
  };

  const remove = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    localStorage.removeItem(`task${id}`);
    setTasks(updatedTasks);
  };

  const handleSave = () => {
    const fileName = `tasks.txt`;
    const fileContent = JSON.stringify(tasks);
    const file = new Blob([fileContent]);
    saveAs(file, fileName);
  };

  const handleEditTask = (item) => {
    if (item.id) {
      const filtred = tasks.map((i) => (i.id === item.id ? item : i));
      setTasks(filtred);
    }
  };
  return (
    <Context.Provider
      value={{
        tasks,
        addTasks,
        setCompleted,
        handleSave,
        remove,
        handleEditTask,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTodolistTasksContext = () => useContext(Context);

export default TodolistTasksProvider;
