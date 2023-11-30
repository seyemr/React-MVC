import React, { useCallback, useEffect, useState } from "react";
import getType from "../getType";
import TodolistForm from "../TodolistForm";
import getSelectedType from "./getSelectedType";
import toTypeOption from "./toTypeOption";
import { useTodolistTasksContext } from "../TodolistTasksProvider";  

// TodolistForm bileşeni için veri sağlayan ve işleyen bileşen adaptörü
const TodolistFormAdapter = () => {
    // TodolistTasksProvider'dan gelen verileri kullanma ve işleme
    const {tasks, addTasks,  save} = useTodolistTasksContext();
    
    // API'den alınan görev tiplerini depolama
    const [types, setTypes] = useState([]);

    // API'den görev tiplerini almak için kullanılan fonksiyonu memoize etme
    const getTypeFromApi = useCallback(async () => {
        setTypes(await getType());
    }, []);

    // ComponentDidMount benzeri etki için useEffect kullanarak görev tiplerini al
    useEffect(() => {
        getTypeFromApi();
    }, [getTypeFromApi]);

    // TodolistForm'a geçirilecek olan "Add" işlevi
    const handleAdd = (fields) => {
        const { title, description, type } = fields;

        // TodolistTasksProvider'a yeni görev eklemek için addTasks'i kullanma
        addTasks({
            title,
            description,
            type: getSelectedType(types, type),
        });
    };

    // TodolistForm bileşenini render eden kısım
    return (
        <TodolistForm 
            todoOptions={types.map(toTypeOption)}
            onAdd={handleAdd}
            handleSave={save}
            tasks={tasks}
        />
        
    );
};

// Bileşeni dışa aktarıyoruz
export default TodolistFormAdapter;
