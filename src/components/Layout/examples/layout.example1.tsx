import * as React from 'react';
import Layout, { Header, Footer, Content } from '../index';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const LayoutExample1: React.FC<Props> = () => {
  return (
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
  );
};
export default LayoutExample1;
