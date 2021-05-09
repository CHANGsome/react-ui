import Dialog, { alert, confirm, modal } from './index';
import React, { useState } from 'react';
import Button from 'components/Button';

const DialogExample: React.FC = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
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

      <div style={{ marginBottom: '20px' }}>
        <h1>Example 3</h1>
        <Button onClick={() => alert('Alert', 'hhh')}>alert</Button>
      </div>

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
    </div>
  );
};
export default DialogExample;
