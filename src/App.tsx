import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Layout, { Aside, Content, Footer, Header } from './components/Layout';
import {
  IconDemo,
  ButtonDemo,
  DialogDemo,
  LayoutDemo,
  FormDemo,
} from './components/index.demo';
import ScrollExample from './components/Scroll/scroll.example';
import TreeDemo from './components/Tree/tree.demo';

const logo = require('assets/logo.png');

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
              <li>
                <NavLink to="/form">Form</NavLink>
              </li>
              <li>
                <NavLink to="/scroll">Scroll</NavLink>
              </li>
              <li>
                <NavLink to="/tree">Tree</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className="content">
            <Switch>
              <Route path="/icon">
                <IconDemo />
              </Route>
              <Route path="/button">
                <ButtonDemo />
              </Route>
              <Route path="/dialog">
                <DialogDemo />
              </Route>
              <Route path="/layout">
                <LayoutDemo />
              </Route>
              <Route path="/form">
                <FormDemo />
              </Route>
              <Route path="/scroll">
                <ScrollExample />
              </Route>
              <Route path="/tree">
                <TreeDemo />
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
