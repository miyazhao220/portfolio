import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo">赵梦婕</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">关于我</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/portfolio">作品集</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/contact">联系方式</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>个人AI产品运营作品集 ©2025</Footer>
      </Layout>
    </Router>
  );
}

export default App;
