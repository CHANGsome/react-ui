import { confirm } from '../index';
import React from 'react';
import Button from 'components/Button';

const DialogExample4: React.FC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Example 4</h1>
      <Button
        onClick={() =>
          confirm(
            'Confirm',
            'hhh',
            () => console.log('ok'),
            () => console.log('cancel')
          )
        }
      >
        confirm
      </Button>
    </div>
  );
};
export default DialogExample4;
