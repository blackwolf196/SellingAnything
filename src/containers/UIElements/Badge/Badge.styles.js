import React from 'react';
import Badges from '@iso/components/uielements/badge';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { font } from 'styled-theme';
import { borderRadius, boxShadow } from '@iso/lib/helpers/style_utils';
import WithDirection from '@iso/lib/helpers/rtl';

const AntBadge = (props) => <Badges {...props} />;

const Badge = styled(AntBadge)`
  display: inline-block;

  &:not(.ant-badge-status) {
    margin-right: ${(props) => (props['data-rtl'] === 'rtl' ? '0' : '16px')};
    margin-left: ${(props) => (props['data-rtl'] === 'rtl' ? '16px' : '0')};
  }

  i {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
  }

  a {
    font-size: 13px;
    color: ${palette('primary', 0)};
  }

  .isoBadgeLink {
    width: 42px;
    height: 42px;
    ${borderRadius('6px')};
    background: ${palette('grayscale', 8)};
    display: inline-block;
  }

  .ant-badge-count {
    z-index: 1;
    background: ${palette('primary', 0)};
    font-family: ${font('primary', 0)};
    ${boxShadow('0 0 0 1px #fff')};
  }
  .ant-badge-status-text {
    margin-left: ${(props) =>
      props['data-rtl'] === 'rtl' ? 'inherit' : '8px'};
    margin-right: ${(props) =>
      props['data-rtl'] === 'rtl' ? '8px' : 'inherit'};
  }
`;

export default WithDirection(Badge);
