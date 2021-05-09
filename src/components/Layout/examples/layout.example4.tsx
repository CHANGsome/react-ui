import * as React from 'react';
import Layout, { Header, Aside, Footer, Content } from '../index';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const LayoutExample4: React.FC<Props> = () => {
  return (
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
  );
};
export default LayoutExample4;
