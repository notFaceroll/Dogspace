import React, { useState } from 'react';

const types: any = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido"
  }
}

const useForm = (type: any = '') => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    // if (error) validate(target.value);

    setValue(target.value);
  }

  function validate(value: string) {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Preencha um valor.');

      return false;

    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)

      return false
    } else {
      setError(null);

      return true;
    }
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
