import React from 'react';
import { SpanStyled } from './styled';

export const Span: React.FC<{
  value?: string;
}> = ({ value }) => (
  <React.Fragment>
    <SpanStyled>{value && value}</SpanStyled>
  </React.Fragment>
);
