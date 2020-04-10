import React, { useRef, useEffect } from 'react';

import { useField } from '@rocketseat/unform';

const MultipleFileInput = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files',
      getValue(ref) {
        return ref.files && Array.from(ref.files);
      },
      clearValue(ref) {
        ref.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input multiple type="file" ref={inputRef} {...rest} />
    </>
  );
};

export default MultipleFileInput;
