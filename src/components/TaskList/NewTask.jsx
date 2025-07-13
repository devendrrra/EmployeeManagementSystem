import React, { useState } from 'react';

const NewTask = ({ data }) => {
  const [taskAccepted, setTaskAccepted] = useState(false);

  return (
    <div className='h-auto flex-shrink-0 p-4 sm:p-5 w-full sm:w-[300px] bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-xs sm:text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-xs sm:text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-4 font-semibold text-lg sm:text-xl'>{data.title}</h2>
      <p className='text-xs sm:text-sm mt-2'>{data.description}</p>
      <div className='mt-4'>
        {taskAccepted ? (
          <div className='mt-4 flex flex-col sm:flex-row justify-between gap-2'>
            <button className='rounded bg-blue-500 py-1 px-2 text-xs sm:text-sm'>
              Mark as Completed
            </button>
            <button className='rounded bg-red-500 py-1 px-2 text-xs sm:text-sm'>
              Mark as Failed
            </button>
          </div>
        ) : (
          <button
            className="rounded bg-blue-500 py-1 px-2 text-xs sm:text-sm"
            onClick={() => setTaskAccepted(true)} // Hide "Accept Task" on click
          >
            Accept Task
          </button>
        )}
      </div>
    </div>
  );
};

export default NewTask;
