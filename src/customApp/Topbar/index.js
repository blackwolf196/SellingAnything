import React from 'react';
import {Layout, Menu} from 'antd';
import TopbarWrapper from './Topbar.styles';
import StardewText from '../../assets/CustomImages/stardew valley text.png'
import {Link} from 'react-router-dom';
import siteConfig from '../../config/site.config';
import DashboardMenuItems from "../Dashboard/DashboardMenuItems";

const {Header} = Layout;

const {Item, SubMenu} = Menu;
export default props => {
  
  const renderItemMenu = () => {
    return DashboardMenuItems.map((item => {
      if (item.children) {
        return <SubMenu title={item.label}>
          {item.children.map(children => <Item key={children.key}>
            <Link to={`${siteConfig.dashboard}/${children.key}`}>{children.label}</Link>
          </Item>)}
        </SubMenu>
      } else {
        return <Item key={item.key}>
          <Link to={`${siteConfig.dashboard}/${item.key}`}>{item.label}</Link>
        </Item>
      }
    }))
  };

  const selectItemMenu = ({item, key, keyPath, selectedKeys}) => {
    // console.log({item, key, keyPath, selectedKeys});
  };

  return (
    <TopbarWrapper>
      <Header className={'dashboard-topbar'}>
        <Link to={`/`}><img src={StardewText} className={'top-logo'}/></Link>
        <Menu mode={'horizontal'} className={'top-menu'} onSelect={selectItemMenu}>
          {renderItemMenu()}
        </Menu>
      </Header>
    </TopbarWrapper>
  );
}
