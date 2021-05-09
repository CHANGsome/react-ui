import * as React from 'react';
import Button from '../index';

const ButtonExample1: React.FC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Example 1</h1>
      <Button style={{ marginRight: '16px' }}>button</Button>
      <Button type="primary" style={{ marginRight: '16px' }}>
        button
      </Button>
      <Button type="link">button</Button>
    </div>
  );
};

export default ButtonExample1;
