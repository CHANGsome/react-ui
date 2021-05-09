import * as React from 'react';
import Button from '../index';

const ButtonExample2: React.FC = () => {
  return (
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
  );
};

export default ButtonExample2;
