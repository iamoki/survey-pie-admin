import { Layout, Menu } from 'antd';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

function MainLayout({ selectedKeys, children, padding = 45 }) {
  const contentStyle = useMemo(() => {
    return { padding };
  }, []);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <div
          className="logo"
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={selectedKeys} mode="inline">
          <Menu.Item key="list">
            <Link to="/list">설문 조사 관리</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
