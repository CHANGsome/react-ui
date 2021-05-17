import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import scopedClassMaker from '../../utils/scopedClassMaker';
import './index.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
const sc = scopedClassMaker('react-ui');
const Index: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return <input className={sc('input', { extra: className })} {...rest} />;
};
export default Index;
