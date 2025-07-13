import React from "react";
import Header from "../other/Header";
import TasksListNumbers from "../other/TasksListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDeshboard(props) {
  return (
    <div className="p-4 sm:p-6 md:p-10 text-white bg-[#1C1C1C] min-h-screen flex flex-col gap-6">
      <Header changeUser={props.changeUser} data={props.data} />
      <TasksListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
}

export default EmployeeDeshboard;
