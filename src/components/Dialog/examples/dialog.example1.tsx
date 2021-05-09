import Dialog from '../index';
import React, { useState } from 'react';
import Button from 'components/Button';

const DialogExample1: React.FC = () => {
  const [x, setX] = useState(false);
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Example 1</h1>
      <Button onClick={() => setX(!x)}>open dialog</Button>
      <Dialog
        visible={x}
        title="Dialog"
        onClose={() => setX(false)}
        buttons={[
          <Button key={1} onClick={() => setX(false)}>
            1
          </Button>,
          <Button key={2} onClick={() => setX(false)}>
            2
          </Button>,
        ]}
      >
        <strong>hhh</strong>
      </Dialog>
    </div>
  );
};
export default DialogExample1;
