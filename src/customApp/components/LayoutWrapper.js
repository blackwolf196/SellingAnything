import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  padding: 10px;
`;

export default props => <Wrapper {...props}>
  {props.children}
</Wrapper>
