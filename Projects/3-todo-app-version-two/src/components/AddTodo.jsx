import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState();

  const [todDoate, settodoDate] = useState();
  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    settodoDate(event.target.value);
  };
  const handleAdd = () => {
    onNewItem(todoName, todDoate);
    settodoDate("");
    settodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2" value={todDoate} onChange={handleDateChange}>
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
