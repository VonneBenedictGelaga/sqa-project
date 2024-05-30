import { useState } from "react";

function AddTaskForm({ saveTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setTitle(title.trim());
    setTitle("");
    setDescription("");
    saveTask(title, description);
  };

  return (
    <form
      className="w-full px-4 pt-2 flex flex-col items-center sm:flex-row sm:items-end sm:justify-center sm:gap-4"
      onSubmit={onSubmit}
      autoComplete="off"
      data-cy-root
    >
      <label className="form-control w-full sm:w-32">
        <div className="label">
          <span className="label-text">TITLE</span>
        </div>
        <input
          data-cy="title-input"
          type="text"
          placeholder="title"
          className="input input-bordered input-sm ring-0 focus:outline-none focus:ring-0 focus:border-accent hover:border-accent"
          required
          minLength={3}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="form-control w-full sm:w-50">
        <div className="label">
          <span className="label-text">DESCRIPTION</span>
        </div>
        <input
          data-cy="description-input"
          type="text"
          placeholder="description"
          className="input input-bordered input-sm focus:outline-none focus:ring-0 focus:border-accent hover:border-accent"
          required
          minLength={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button
        data-cy="add-button"
        className="btn btn-accent btn-sm w-full mt-4 sm:w-20 text-white"
        type="submit"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 opacity-80"
          stroke="currentColor"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"></path> </g>
        </svg>
        Add
      </button>
    </form>
  );
}

export default AddTaskForm;
