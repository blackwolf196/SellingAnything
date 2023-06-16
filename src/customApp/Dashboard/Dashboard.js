import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Layout} from 'antd';
import useWindowSize from '../../library/hooks/useWindowSize';
import appActions from '../../redux/app/actions';
import siteConfig from '../../config/site.config';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import DashboardRoutes from './DashboardRoutes';

import {DashboardContainer, DashboardGlobalStyles} from './Dashboard.styles';

const {Content, Footer} = Layout;
const {toggleAll} = appActions;

const Dashboard = () => {
  const dispatch = useDispatch();
  const appHeight = useSelector(state => state.App.height);
  const {width, height} = useWindowSize();
  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  return (
    <DashboardContainer>
      <DashboardGlobalStyles/>
      <Layout style={{height: height}}>
        <Topbar/>
        <Layout
          className={'dashboard-mainlayout'}
          style={{
            height: appHeight,
          }}
        >
          <Content className={'dashboard-content'}>
            <DashboardRoutes/>
          </Content>
          <Footer className={'dashboard-footer'}>{siteConfig.footerText}</Footer>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}

export default Dashboard;