import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-4 sm:p-5 rounded mt-5">
      <div className="py-2 px-4 bg-red-400 mb-2 flex flex-wrap justify-between rounded">
        <h2 className="text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">Employee Name</h2>
        <h3 className="text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">New Task</h3>
        <h5 className="text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">Active Task</h5>
        <h5 className="text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">Completed</h5>
        <h5 className="text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">Failed</h5>
      </div>
      <div>
        {userData.map((e, i) => (
          <div key={i} className="py-2 px-4 border-2 border-emerald-500 mb-2 flex flex-wrap justify-between rounded">
            <h2 className="text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">{e.name}</h2>
            <h3 className="text-blue-400 text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">{e.taskNumbers.newTask}</h3>
            <h5 className="text-yellow-400 text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">{e.taskNumbers.active}</h5>
            <h5 className="text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">{e.taskNumbers.completed}</h5>
            <h5 className="text-red-600 text-sm sm:text-lg w-full sm:w-1/5 font-medium mb-2 sm:mb-0">{e.taskNumbers.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
