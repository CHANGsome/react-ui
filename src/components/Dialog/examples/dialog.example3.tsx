import { alert } from '../index';
import React from 'react';
import Button from 'components/Button';

const DialogExample3: React.FC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Example 3</h1>
      <Button onClick={() => alert('Alert', 'hhh')}>alert</Button>
    </div>
  );
};
export default DialogExample3;
