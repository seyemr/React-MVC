import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Header from "../../../components/Header";

const TodolistFormView = (props) => {
    const {
        model: {
            isLoading,
            isValid,
            fields: { type },
        },
        onFieldChange,
        onAdd,
        handleSave,
        tasks,
    } = props;

    const [selectedType, setSelectedType] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        onAdd();
    };

    const handleTitleChange = (e) => {
        e.preventDefault();
        const {
            target: { value },
        } = e;
        onFieldChange({ field: "title", value });
    };

    const handleDescriptionChange = (e) => {
        e.preventDefault();
        const {
            target: { value },
        } = e;
        onFieldChange({ field: "description", value });
    };

    const handleTypeChange = (e) => {
        e.preventDefault();
        const {
            target: { value },
        } = e;
        setSelectedType(value);
        try {
            onFieldChange({ field: "type", value });
        } catch (error) {
            // Hata durumunda gerekli işlemler
        }
    };

    const handleSaveClick = () => {
        handleSave(tasks);
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleAdd} noValidate autoComplete="off">
                <input
                    id="title"
                    aria-label="title"
                    placeholder="Başlık"
                    className="input"
                    label="Title"
                    required
                    onChange={(e) => handleTitleChange(e)}
                />

                <input
                    id="description"
                    aria-label="description"
                    placeholder="Görev Tanımı"
                    className="input"
                    label="Description"
                    variant="filled"
                    onChange={(e) => handleDescriptionChange(e)}
                />

                <div className="row">
                    <div variant="filled" required>
                        {isLoading ? (
                            <CircularProgress />
                        ) : (
                            <div>
                                <select
                                    aria-label="type"
                                    style={{
                                       background:"black",
                                        border: '1px solid #adb5bd',
                                        borderRadius: '0.25em',
                                        cursor: 'pointer',
                                        padding: '4px',
                                        opacity: '0.6',
                                        color:"white"
                                    }}
                                    id="type"
                                    value={selectedType}
                                    onChange={(e) => handleTypeChange(e)}
                                >
                                    <option>Tipi</option>
                                    {type.options.map(({ label, value }) => (
                                        <option key={value} value={value}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <button
                            className="button"
                            onClick={handleSaveClick}
                            type="button"
                            disabled={!isValid}
                            style={{ marginRight: '15px' }}
                        >
                            Kaydet
                        </button>
                        <button
                            className="button"
                            type="submit"
                            disabled={!isValid}
                            style={!isValid ? { background: "#575f6c" } : {}}
                            aria-label="add"
                        >
                            Ekle
                        </button>
                    </div>
                </div>
            </form>
            <div className="line"></div>
        </div>
    );
};

export default TodolistFormView;


