import React from "react";

function TasksListNumbers({ data }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10 w-full">
      <div className="p-5 sm:px-9 sm:py-6 rounded-xl bg-blue-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-base sm:text-xl font-medium">New Task</h3>
      </div>
      <div className="p-5 sm:px-9 sm:py-6 rounded-xl bg-green-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-base sm:text-xl font-medium">Completed Task</h3>
      </div>
      <div className="p-5 sm:px-9 sm:py-6 rounded-xl bg-yellow-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-base sm:text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="p-5 sm:px-9 sm:py-6 rounded-xl bg-red-400 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-base sm:text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TasksListNumbers;
