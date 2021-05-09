import Dialog from '../index';
import React, { useState } from 'react';
import Button from 'components/Button';

const DialogExample2: React.FC = () => {
  const [y, setY] = useState(false);
  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>Example 2</h1>
      <Button onClick={() => setY(!y)}>open dialog</Button>
      <Dialog
        closeOnclickMask={false}
        visible={y}
        title="Dialog"
        onClose={() => setY(false)}
        buttons={[
          <Button key={1} onClick={() => setY(false)}>
            1
          </Button>,
          <Button key={2} onClick={() => setY(false)}>
            2
          </Button>,
        ]}
      >
        <strong>hhh</strong>
      </Dialog>
    </div>
  );
};
export default DialogExample2;
