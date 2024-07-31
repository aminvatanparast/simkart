import React from 'react';

const Title = ({title , mt= 10  , pos = "right"}) => {
  return (
    <div className={`w-full text-2xl ${"mt-" + mt} mb-5 font-bold ${"text-" + pos}`}>
      {title}
    </div>
  );
};

export default Title;
