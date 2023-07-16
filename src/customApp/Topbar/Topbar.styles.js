import styled from 'styled-components';
import {palette} from 'styled-tools';
import {
  transition,
  borderRadius,
  boxShadow,
} from '@iso/lib/helpers/style_utils';

const TopbarWrapper = styled.div`
  .dashboard-topbar {
    background: #FFF;
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    user-select: none;
    
    .top-logo {
      height: 70px;
    }
      
    .top-menu {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default TopbarWrapper;
