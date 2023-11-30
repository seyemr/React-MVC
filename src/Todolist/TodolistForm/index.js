import React, { useReducer, useEffect } from "react";
import initialModel from "./TodolistFormModel";
import action from "./TodolistFormModel/TodolistFormActions";
import View from "./views/TodolistFormView";
import reducer from "./TodolistFormModel/TodolistFormReducer";

// TodolistForm bileşeni
const TodolistForm = ({ todoOptions, onAdd, handleSave, tasks }) => {
    // useReducer hook'u kullanılarak bileşenin durumu ve işlevi tanımlanıyor
    const [model, dispatch] = useReducer(reducer, initialModel);

    // todoOptions prop'u değiştikçe, durumu güncelleyen useEffect Tip Bölümü
    useEffect(() => {
        dispatch(action.setTodolistOptions(todoOptions));
    }, [todoOptions]);

    // Alan değişiklikleri için kullanılan işlev
    const handleFieldChange = (change) => {
        dispatch(action.changeField(change));
    };

    // "Add" butonuna tıklama işlevi
    const handleAdd = () => {
        const {
            fields: { title, description, type },
        } = model;

        // onAdd prop'uyla iletilen işlevi çağırma
        onAdd({ title: title.value, description: description.value, type: type.value });
    };

    // TodolistFormView bileşenini render eden kısım
    return (
        <View
            model={model}
            onFieldChange={handleFieldChange}
            onAdd={handleAdd}
            handleSave={handleSave}
            tasks={tasks}
        />
    );
};

// TodolistForm bileşenini dışa aktarıyoruz
export default TodolistForm;

