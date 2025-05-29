import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Fragment } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const { data: allTodos = [], refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/todos");
      return data;
    },
  });

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      refetch();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Edit
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(allTodos) &&
              allTodos.map((todo) => (
                <tr
                  key={todo.todo_id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4 text-gray-800">
                    {todo.description}
                  </td>
                  <td className="px-6 py-4">
                    <EditTodo todo={todo} />
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => deleteTodo(todo.todo_id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListTodos;
