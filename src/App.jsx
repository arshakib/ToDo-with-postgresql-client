import React from "react";
import InputTodo from "./component/InputTodo";
import ListTodos from "./component/ListTodos";

const App = () => {
  return (
    <div>
      <div className=" mx-auto p-6 bg-white shadow-md rounded-lg mt-2">
        <InputTodo />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
