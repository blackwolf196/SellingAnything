import React from "react";
import styled from 'styled-components';
import {Checkbox} from 'antd';

const CheckboxStyled = styled(Checkbox)`
  &:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus+.ant-checkbox-inner {
    border-color: ${props => props.color};
  }

  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus+.ant-checkbox-inner {
    border-color: ${props => props.color};
  }

  .ant-checkbox {
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${props => props.color};
      border-color: ${props => props.color};
    } 
  
    .ant-checkbox-inner {
      background-color: ${props => props.color};
    }
  }

  
`;

export default props => <CheckboxStyled {...props}>{props.children}</CheckboxStyled>