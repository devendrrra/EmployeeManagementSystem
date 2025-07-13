import React, { useState } from 'react';

const AcceptTask = ({ data }) => {
  const [taskStatus, setTaskStatus] = useState(null);
  return (
    <div className='h-auto flex-shrink-0 p-4 sm:p-5 w-full sm:w-[300px] bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-xs sm:text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-xs sm:text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-4 font-semibold text-lg sm:text-xl'>{data.title}</h2>
      <p className='text-xs sm:text-sm mt-2'>{data.description}</p>
      <div className='mt-4 flex flex-col sm:flex-row justify-between gap-2'>
      {taskStatus === "completed" ? (
          <button className='w-full rounded bg-green-400 py-1 px-2 text-xs sm:text-sm'>Completed</button>
        ) : taskStatus === "failed" ? (
          <button className='w-full rounded bg-red-500 py-1 px-2 text-xs sm:text-sm'>Failed</button>
        ) : (
          <div className='flex flex-col sm:flex-row justify-between gap-2'>
            <button
              onClick={() => setTaskStatus("completed")}
              className='rounded bg-blue-500 py-1 px-2 text-xs sm:text-sm'
            >
              Mark as Completed
            </button>
            <button
              onClick={() => setTaskStatus("failed")}
              className='rounded bg-red-500 py-1 px-2 text-xs sm:text-sm'
            >
              Mark as Failed
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AcceptTask;
