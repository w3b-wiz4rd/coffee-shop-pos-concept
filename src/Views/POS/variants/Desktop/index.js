import React from 'react';
/* Components */
import Products from '../../Products';
import Summary from '../../Summary';
/* Styled Components */
import { Container } from './styled';

const Desktop = () => {
  return (
    <Container>
      <Products />
      <Summary />
    </Container>
  );
};

export default Desktop;
