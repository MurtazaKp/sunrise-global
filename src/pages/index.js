import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    AppstoreOutlined,
    HomeFilled,
    FileOutlined,
    TeamOutlined,
    RightCircleOutlined,
    UserAddOutlined,
    AimOutlined,
    EditOutlined,
    EllipsisOutlined,
    ThunderboltOutlined,
    GiftOutlined,
    AccountBookFilled
    
    
    
} from '@ant-design/icons';
import { Layout, Menu, Button, theme} from 'antd';
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Dashboard', '1', <HomeFilled />),
    getItem('Welcome Letter', '2', <FileOutlined />),
    getItem('Register New (unpaid?)', '3', <EditOutlined />),
    getItem('Profile Management', 'Sub1', < UserAddOutlined />,[
      getItem('View/Edit Profile', '5'),
      getItem('Change Login Password', '6'),
     
    ]),

    getItem('My Network', 'sub2', <AimOutlined/>,[
      getItem('View/Edit Profile', '7'),
      getItem('Tree View', '8'),
      getItem('My Downline List', '9'),
      getItem('My Direct', '10'),
      getItem('Levelwise Distribution List', '11'),

     
    ]),

    getItem('e-Pin Management', 'sub3', <EllipsisOutlined />,[
      getItem('Transfer e-Pin', '12'),
      getItem('e-pin Transferred List', '13'),
      getItem('e-Pin Report', '14'),
      getItem('PIN Request', '15'),     
    ]),

    getItem('Distributor Top Up', '16', <ThunderboltOutlined />),
    getItem('My Rewards', '17', <GiftOutlined />),

    getItem('Commision', 'sub4', <MailOutlined />, [
      getItem('Commision History', '18',<RightCircleOutlined />),
      getItem('Commision Details', '19'),
 
    ]),
    getItem('Logout', '20',),

  ];
  return (
    <Layout>
      <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header
        className=' bg-blue-950'
          style={{
            padding: 0,
          
          }}
        >
          <Button 
            type="text"
            icon={collapsed ? <MenuFoldOutlined className='fill-white' /> : <MenuFoldOutlined className='fill-white' />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 100,
            background: colorBgContainer,
          }}
        >
          Content kjjijj
        </Content>
      
      </Layout>
    </Layout>
  );
};
export default App;