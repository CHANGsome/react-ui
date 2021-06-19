import * as React from 'react';
import Demo from '../Demo';
import TreeExample from './tree.example';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const TreeDemo: React.FC<Props> = (props) => {
  return (
    <div>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./tree.example`).default
        }
      >
        <TreeExample />
      </Demo>
    </div>
  );
};
export default TreeDemo;
