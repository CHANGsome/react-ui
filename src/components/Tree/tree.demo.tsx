import * as React from 'react';
import Demo from '../Demo';
import TreeExample1 from './examples/tree.example1';
import TreeExample2 from './examples/tree.example2';
import TreeExample3 from './examples/tree.example3';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const TreeDemo: React.FC<Props> = (props) => {
  return (
    <div>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/tree.example1`).default
        }
      >
        <TreeExample1 />
      </Demo>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/tree.example2`).default
        }
      >
        <TreeExample2 />
      </Demo>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/tree.example3`).default
        }
      >
        <TreeExample3 />
      </Demo>
    </div>
  );
};
export default TreeDemo;
