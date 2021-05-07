import * as React from 'react';
import Layout from './index';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const LayoutExample: React.FC<Props> = () => {
  return (
    <div>
      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 1</h1>
        <Layout style={{ height: '200px' }}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 2</h1>
        <Layout style={{ height: '200px' }}>
          <Header>header</Header>
          <Layout>
            <Aside style={{ width: '200px' }}>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 3</h1>
        <Layout style={{ height: '200px' }}>
          <Header>header</Header>
          <Layout>
            <Content>content</Content>
            <Aside style={{ width: '200px' }}>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 4</h1>
        <Layout style={{ height: '200px' }}>
          <Aside style={{ width: '200px' }}>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
export default LayoutExample;
