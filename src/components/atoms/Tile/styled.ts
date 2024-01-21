import Styled from 'styled-components';
import { tileSize } from '../../../common/styleUtils';

export const TileStyled = Styled.button`
  border-radius: 0;
  font-size: ${tileSize / 2}px;
  height: ${tileSize}px;
  line-height: ${tileSize}px;
  margin-left: -2px;
  margin-bottom: -2px;
  text-align: center;
  width: ${tileSize}px;
  background-color: #c1c1c1;
  &:focus {
    outline: none;
  }
  &:hover{
    background-color: #cfcfcf
  }
`;
