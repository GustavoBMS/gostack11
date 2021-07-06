import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react'
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  /**
   * SEMPRE QUE EXISTIR UMA FUNCAO DENTRO DE UM COMPONENTE, DEVE SER USADO useCallback
   * useCallback evita que a funcao seja renderizada mais de uma vez
   */
  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])
  
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);
  
  useEffect(() =>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      { Icon && <Icon size={20} /> }
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur} 
        defaultValue={defaultValue} 
        ref={inputRef} 
        {...rest} 
      />
    </Container>
  )
}

export default Input
