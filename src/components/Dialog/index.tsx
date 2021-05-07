import scopedClassMaker from 'utils/scopedClassMaker';
import './index.scss';
import React, { ReactElement, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon';

interface DialogProps {
  visible: boolean;
  closeOnclickMask?: boolean; // 点击mask是否关闭弹窗，为true时关闭，默认为true
  title: string;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
}

// 给所有的类名加react-ui-的前缀
const sc = scopedClassMaker('react-ui-dialog');

const Dialog: React.FC<DialogProps> = (props) => {
  const { visible, title, buttons, onClose, closeOnclickMask } = props;
  const onClickMask: React.MouseEventHandler = (e) => {
    if (closeOnclickMask) {
      onClose(e);
    }
  };
  const DialogContent = visible ? (
    <>
      <div className={sc('mask')} onClick={onClickMask} />
      <div className={sc()}>
        <div className={sc('close')} onClick={onClose}>
          <Icon name="close" />
        </div>
        <header className={sc('header')}>{title}</header>
        <main className={sc('main')}>{props.children}</main>
        {buttons && buttons?.length > 0 && (
          <footer className={sc('footer')}>
            {buttons.map((button, index) =>
              React.cloneElement(button, { key: index })
            )}
          </footer>
        )}
      </div>
    </>
  ) : null;
  // 将 dialog 挂载到body上，防止z-index覆盖
  return ReactDOM.createPortal(DialogContent, document.body);
};
Dialog.defaultProps = {
  closeOnclickMask: true,
};

// modal：没有底部按钮
export const modal = (
  title: string,
  content: string | ReactNode,
  buttons?: Array<ReactElement>
) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const onClose = () => {
    // 移除dialog
    ReactDOM.render(React.cloneElement(dialog, { visible: false }), div);
    // 移除div
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const dialog = (
    <Dialog onClose={onClose} title={title} visible={true} buttons={buttons}>
      {content}
    </Dialog>
  );
  ReactDOM.render(dialog, div);
  return onClose;
};

// alert：只有Ok按钮
export const alert = (title: string, content: string) => {
  const buttons = [<button onClick={() => close()}>OK</button>];
  const close = modal(title, content, buttons);
};

// confirm：有ok和cancel按钮
export const confirm = (
  title: string,
  content: ReactNode | string,
  ok?: () => void,
  cancel?: () => void
) => {
  const onOk = () => {
    close();
    ok && ok();
  };
  const onCancel = () => {
    close();
    cancel && cancel();
  };
  const buttons = [
    <button onClick={onOk}>OK</button>,
    <button onClick={onCancel}>Cancel</button>,
  ];
  const close = modal(title, content, buttons);
};
export default Dialog;
