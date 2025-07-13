import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);
  const [createTaskData, setCreateTaskData] = useState({
    title: "",
    description: "",
    date: "",
    asignTo: "",
    category: "",
  });
  const [newTask, setNewTask] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      ...createTaskData,
      active: false,
      failed: false,
      completed: false,
      newTask: true,
    });
  };

  useEffect(() => {
    const data = userData;

    data.forEach((elem) => {
      if (createTaskData.asignTo == elem.name) {
        elem.tasks.push(newTask);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask++;
      }
    });

    setUserData(data);
    console.log(data);

    setCreateTaskData({
      title: "",
      description: "",
      date: "",
      asignTo: "",
      category: "",
    });
  }, [newTask]);

  return (
    <div className="p-5 mt-7 rounded bg-[#1c1c1c]">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={createTaskData.title}
              onChange={(e) => {
                setCreateTaskData({ ...createTaskData, title: e.target.value });
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] mb-4 border-gray-400"
              type="text"
              placeholder="Make a UI Task"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={createTaskData.date}
              onChange={(e) => {
                setCreateTaskData({ ...createTaskData, date: e.target.value });
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] mb-4 border-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={createTaskData.asignTo}
              onChange={(e) => {
                setCreateTaskData({
                  ...createTaskData,
                  asignTo: e.target.value,
                });
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] mb-4 border-gray-400"
              type="text"
              placeholder="employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={createTaskData.category}
              onChange={(e) => {
                setCreateTaskData({
                  ...createTaskData,
                  category: e.target.value,
                });
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] mb-4 border-gray-400"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={createTaskData.description}
            onChange={(e) => {
              setCreateTaskData({
                ...createTaskData,
                description: e.target.value,
              });
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full ">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
