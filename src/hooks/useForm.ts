import React, { useState } from 'react';


const useForm = () => {
  const [input, setInput] = useState('');

  return {
    input,
    setInput,
  };
}

export default useForm;
