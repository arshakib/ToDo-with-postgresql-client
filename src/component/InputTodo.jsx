import axios from "axios";
import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/todos", { description })
        .then((res) => alert(res.data))
        .catch((err) => console.error(err));
      setDescription("");
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-3xl font-bold text-center mt-8 text-gray-800">
        PERN Todo List
      </h1>
      <form
        className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4 px-4"
        onSubmit={onSubmitForm}
      >
        <input
          type="text"
          className="w-full sm:w-96 px-4 py-2 border-2 border-amber-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Enter a task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
        >
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
