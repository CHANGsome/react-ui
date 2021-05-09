import * as React from 'react';
import Button from './index';

const ButtonExample: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h1>Example 1</h1>
        <Button style={{ marginRight: '16px' }}>button</Button>
        <Button type="primary" style={{ marginRight: '16px' }}>
          button
        </Button>
        <Button type="link">button</Button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h1>Example 2</h1>
        <Button danger style={{ marginRight: '16px' }}>
          button
        </Button>
        <Button type="primary" danger style={{ marginRight: '16px' }}>
          button
        </Button>
        <Button type="link" danger>
          button
        </Button>
      </div>
    </div>
  );
};
export default ButtonExample;
