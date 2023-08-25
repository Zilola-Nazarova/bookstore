import { useState } from 'react';

const Categories = () => {
  const [para, setPara] = useState('');

  return (
    <>
      <button
        type="button"
        onClick={() => setPara('Under construction')}
      >
        check status
      </button>
      <p>{para}</p>
    </>
  );
};

export default Categories;
