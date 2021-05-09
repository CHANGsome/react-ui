import * as React from 'react';
import Layout, { Header, Aside, Footer, Content } from '../index';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const LayoutExample2: React.FC<Props> = () => {
  return (
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
  );
};
export default LayoutExample2;
