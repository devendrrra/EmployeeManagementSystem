import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

function AdminDeshboard({changeUser}) {
  return (
    <div className="text-white p-7 h-screen w-full">
      <Header changeUser={changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDeshboard;
