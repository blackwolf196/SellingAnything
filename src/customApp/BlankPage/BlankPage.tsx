import React from 'react';
import LayoutWrapper from '../components/LayoutWrapper';
import Styled from './styled';
import Button from '../../components/uielements/button';

const BlankPage: React.FC = () => {
  return (
    <LayoutWrapper>
      <Styled>
        <Button>Click</Button>
      </Styled>
    </LayoutWrapper>
  );
};

export default BlankPage;
