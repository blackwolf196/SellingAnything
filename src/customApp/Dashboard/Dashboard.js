import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Layout} from 'antd';
import useWindowSize from '../../library/hooks/useWindowSize';
import appActions from '../../redux/app/actions';
import siteConfig from '../../config/site.config';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import DashboardRoutes from './DashboardRoutes';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import {DashboardContainer, DashboardGlobalStyles} from './Dashboard.styles';

const {Content, Footer} = Layout;
const {toggleAll} = appActions;

export default () => {
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
          {/*<MessengerCustomerChat pageId={''} appId={'516142433376694'}/>*/}
          <Footer className={'dashboard-footer'}>{siteConfig.footerText}</Footer>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
