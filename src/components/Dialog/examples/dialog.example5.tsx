import { modal } from '../index';
import React from 'react';
import Button from 'components/Button';

const DialogExample5: React.FC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Example 5</h1>
      <Button
        onClick={() => {
          const close = modal(
            'Modal',
            <div>
              <strong>hhh</strong>
              <Button onClick={() => close()}>cancel</Button>
            </div>
          );
        }}
      >
        modal
      </Button>
    </div>
  );
};
export default DialogExample5;
