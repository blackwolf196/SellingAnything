import styled from 'styled-components';

const TopbarWrapper = styled.div`
  .dashboard-topbar {
    background: #fff;
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
