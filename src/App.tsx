import React from 'react';
import './index.scss';
import {
  DialogExample,
  ButtonExample,
  LayoutExample,
} from './components/index.example';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Layout, { Aside, Content, Footer, Header } from './components/Layout';
import IconDemo from './components/Icon/icon.demo';

const logo = require('assets/logo.png');
console.log(logo);

function App() {
  return (
    <Router>
      <Layout className="container">
        <Header className="header">
          <img src={logo.default} alt="logo" className="logo" />
        </Header>
        <Layout className="main">
          <Aside className="aside">
            <h1 className="title">组件</h1>
            <ul>
              <li>
                <NavLink to="/icon">Icon</NavLink>
              </li>
              <li>
                <NavLink to="/button">Button</NavLink>
              </li>
              <li>
                <NavLink to="/dialog">Dialog</NavLink>
              </li>
              <li>
                <NavLink to="/layout">Layout</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className="content">
            <Switch>
              <Route path="/icon">
                <IconDemo />
              </Route>
              <Route path="/button">
                <ButtonExample />
              </Route>
              <Route path="/dialog">
                <DialogExample />
              </Route>
              <Route path="/layout">
                <LayoutExample />
              </Route>
              <Route path="/">
                <IconDemo />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
    </Router>
  );
}

export default App;
