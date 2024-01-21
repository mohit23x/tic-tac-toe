import React from 'react';
import { ButtonStyled } from './styled';

export const Button: React.FC<{
  value?: string;
  handleOnClick: () => void;
  disabled?: boolean;
}> = ({ value, handleOnClick, disabled }) => (
  <ButtonStyled disabled={disabled} onClick={handleOnClick}>
    {value && value}
  </ButtonStyled>
);
