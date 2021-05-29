import * as React from 'react';
import scopedClassMaker from '../../utils/scopedClassMaker';
import './index.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const sc = scopedClassMaker('react-ui-scroll');
const Scroll: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className={sc()}>
      <div className={sc('inner')}>{children}</div>
    </div>
  );
};
export default Scroll;
