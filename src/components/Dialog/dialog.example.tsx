import Dialog, { alert, confirm, modal } from './index';
import React, { useState } from 'react';

const DialogExample: React.FC = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 1</h1>
        <button onClick={() => setX(!x)}>open dialog</button>
        <Dialog
          visible={x}
          title="Dialog"
          onClose={() => setX(false)}
          buttons={[
            <button key={1} onClick={() => setX(false)}>
              1
            </button>,
            <button key={2} onClick={() => setX(false)}>
              2
            </button>,
          ]}
        >
          <strong>hhh</strong>
        </Dialog>
      </div>

      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 2</h1>
        <button onClick={() => setY(!y)}>open dialog</button>
        <Dialog
          closeOnclickMask={false}
          visible={y}
          title="Dialog"
          onClose={() => setY(false)}
          buttons={[
            <button key={1} onClick={() => setY(false)}>
              1
            </button>,
            <button key={2} onClick={() => setY(false)}>
              2
            </button>,
          ]}
        >
          <strong>hhh</strong>
        </Dialog>
      </div>

      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 3</h1>
        <button onClick={() => alert('Alert', 'hhh')}>alert</button>
      </div>

      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 4</h1>
        <button
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
        </button>
      </div>

      <div style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
        <h1>Example 5</h1>
        <button
          onClick={() => {
            const close = modal(
              'Modal',
              <div>
                <strong>hhh</strong>
                <button onClick={() => close()}>cancel</button>
              </div>
            );
          }}
        >
          modal
        </button>
      </div>
    </div>
  );
};
export default DialogExample;
