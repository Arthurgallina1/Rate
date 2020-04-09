import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import { addHours } from 'date-fns';

import { Container } from './styles';

export default function AvatarInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  //fieldName = nome final do input;
  //registerField função que tem que ser disparada assim que o componente é montado em tela. utilizando useffect
  // console.log(inputRef.current) //valor atual da referencia
  // Falar pro unform que esse input faz parte do formulário
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value', //qual propriedade contem o valor do input?
    });
  }, [fieldName, registerField]);

  return (
    <input ref={inputRef} {...rest} defaultValue={defaultValue} onChange={} />
  );
}
