import * as React from 'react';
import Demo from '../Demo';
import IconExample from './icon.example';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const IconDemo: React.FC<Props> = (props) => {
  return (
    <Demo
      code={
        // eslint-disable-next-line import/no-webpack-loader-syntax
        require(`!!raw-loader!./icon.example`).default
      }
    >
      <IconExample />
    </Demo>
  );
};
export default IconDemo;
