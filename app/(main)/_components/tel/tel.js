import React from 'react';

const Tel = ({tel}) => {
  return (
    <div>
      <a href={`tel:${tel}`}>
        <button type="button"
                className="text-white bg-orange-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
          {tel}
        </button>
      </a>
    </div>
  );
};

export default Tel;
