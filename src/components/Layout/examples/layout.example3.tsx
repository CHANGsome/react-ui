import * as React from 'react';
import Layout, { Header, Aside, Footer, Content } from '../index';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const LayoutExample3: React.FC<Props> = () => {
  return (
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
  );
};
export default LayoutExample3;
