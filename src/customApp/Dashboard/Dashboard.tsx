import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import useWindowSize from '../../library/hooks/useWindowSize';
import appActions from '../../redux/app/actions';
import siteConfig from '../../config/site.config';
import Topbar from '../Topbar';
import DashboardRoutes from './DashboardRoutes';
import { RootState } from '../../redux/interface';

import { DashboardContainer, DashboardGlobalStyles } from './Dashboard.styles';

const { Content, Footer } = Layout;
const { toggleAll } = appActions;

const Dashboard = () => {
  const dispatch = useDispatch();
  const appHeight = useSelector((state: RootState) => state.App.height);
  const { width, height } = useWindowSize();
  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout style={{ height: height }}>
        <Topbar />
        <Layout
          className={'dashboard-mainlayout'}
          style={{
            height: appHeight.toString()
          }}
        >
          <Content className={'dashboard-content'}>
            <DashboardRoutes />
          </Content>
          <Footer className={'dashboard-footer'}>
            {siteConfig.footerText}
          </Footer>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
};

export default Dashboard;
