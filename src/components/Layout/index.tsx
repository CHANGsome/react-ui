import * as React from 'react';
import { ReactElement } from 'react';
import scopedClassMaker from '../../utils/scopedClassMaker';
import Aside from './aside';
import classNames from '../../utils/classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}
const sc = scopedClassMaker('react-ui-layout');
const Layout: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;
  // 判断layout有没有aside子元素
  const hasAside =
    children.length &&
    children.reduce((result, node) => result || node.type === Aside, false);

  return (
    <div
      className={classNames(
        sc(),
        className,
        hasAside ? sc('hasAside') : undefined
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Layout;
