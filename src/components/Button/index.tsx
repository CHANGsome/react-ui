import * as React from 'react';
import './index.scss';
import scopedClassMaker from '../../utils/scopedClassMaker';
import classNames from '../../utils/classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
  type?: string;
  danger?: boolean;
}

const sc = scopedClassMaker('react-ui-button');
const Button: React.FC<Props> = (props) => {
  const { type, danger, children, ...rest } = props;
  return (
    <button
      className={classNames(
        sc(),
        type ? sc(type) : undefined,
        danger ? sc(type ? type + '-danger' : 'danger') : undefined
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
