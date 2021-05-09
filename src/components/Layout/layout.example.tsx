import * as React from 'react';
import Layout, { Header, Aside, Footer, Content } from './index';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const LayoutExample: React.FC<Props> = () => {
  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1>Example 1</h1>
        <Layout style={{ height: '200px' }}>
          <Header style={{ backgroundColor: 'blue', color: '#fff' }}>
            header
          </Header>
          <Content style={{ backgroundColor: 'orange' }}>content</Content>
          <Footer style={{ backgroundColor: 'green', color: '#fff' }}>
            footer
          </Footer>
        </Layout>
      </div>
      <div style={{ marginBottom: '32px' }}>
        <h1>Example 2</h1>
        <Layout style={{ height: '200px' }}>
          <Header style={{ backgroundColor: 'blue', color: '#fff' }}>
            header
          </Header>
          <Layout>
            <Aside style={{ width: '200px', backgroundColor: 'greenyellow' }}>
              aside
            </Aside>
            <Content style={{ backgroundColor: 'orange' }}>content</Content>
          </Layout>
          <Footer style={{ backgroundColor: 'green', color: '#fff' }}>
            footer
          </Footer>
        </Layout>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h1>Example 3</h1>
        <Layout style={{ height: '200px' }}>
          <Header style={{ backgroundColor: 'blue', color: '#fff' }}>
            header
          </Header>
          <Layout>
            <Content style={{ backgroundColor: 'orange' }}>content</Content>
            <Aside style={{ width: '200px', backgroundColor: 'greenyellow' }}>
              aside
            </Aside>
          </Layout>
          <Footer style={{ backgroundColor: 'green', color: '#fff' }}>
            footer
          </Footer>
        </Layout>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h1>Example 4</h1>
        <Layout style={{ height: '200px' }}>
          <Aside style={{ width: '200px', backgroundColor: 'greenyellow' }}>
            aside
          </Aside>
          <Layout>
            <Header style={{ backgroundColor: 'blue', color: '#fff' }}>
              header
            </Header>
            <Content style={{ backgroundColor: 'orange' }}>content</Content>
            <Footer style={{ backgroundColor: 'green', color: '#fff' }}>
              footer
            </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
export default LayoutExample;
