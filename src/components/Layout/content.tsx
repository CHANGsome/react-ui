import * as React from 'react';
import './index.scss';
import scopedClassMaker from '../../utils/scopedClassMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const sc = scopedClassMaker('react-ui-layout');
const Content: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={sc('content')} {...rest}>
      {children}
    </div>
  );
};
export default Content;
