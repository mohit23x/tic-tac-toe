import Styled from 'styled-components';

export const SectionStyled = Styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: auto;
  justify-content: center;
  height: 100vh;
`;

export const BoardStyled = Styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  width: auto;
  grid-gap: 5px;
  border: 5px solid black;
  background-color: black;
`;
