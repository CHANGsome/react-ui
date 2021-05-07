import * as React from 'react';
import './index.scss';
import scopedClassMaker from '../../utils/scopedClassMaker';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const sc = scopedClassMaker('react-ui-layout');

const Aside: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <div className={sc('aside')} {...rest}>
      {children}
    </div>
  );
};
export default Aside;
