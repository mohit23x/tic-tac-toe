import React from 'react';
import { TileStyled } from './styled';

export const Tile: React.FC<{
  value: string;
  handleOnClick: () => void;
}> = ({ value, handleOnClick }) => (
  <TileStyled onClick={() => handleOnClick()}>{value && value}</TileStyled>
);
