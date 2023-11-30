// Example of an EditingForm component
import React, { useState, useEffect } from "react";

const EditingForm = ({ editingTask, handleCancelEdit, handleSaveEdit }) => {
  const [editedTitle, setEditedTitle] = useState(editingTask.title);
  const [editedDescription, setEditedDescription] = useState(editingTask.description);

  const handleSave = () => {
    // handleEdit işlevini kullanarak burada kaydet işlemini gerçekleştir.
    handleSaveEdit({
      id: editingTask.id,
      title: editedTitle,
      description: editedDescription,
    });
    

    // Formu sıfırlayın ve düzenleme durumunu kapatın.
    setEditedTitle("");
    setEditedDescription("");
    handleCancelEdit();
  };

  useEffect(() => {
    // Değiştiğinde başlangıç düzenini ayarlayın.
    setEditedTitle(editingTask.title);
    setEditedDescription(editingTask.description);
  }, [editingTask]);

  return (
    <div className="editingForm">
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <textarea
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <button onClick={handleSave}>Güncelle</button>
      <button onClick={handleCancelEdit}>Kapat</button>
    </div>
  );
};

export default EditingForm;
