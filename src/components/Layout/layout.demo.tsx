import * as React from 'react';
import Demo from '../Demo';
import LayoutExample1 from './examples/layout.example1';
import LayoutExample2 from './examples/layout.example2';
import LayoutExample3 from './examples/layout.example3';
import LayoutExample4 from './examples/layout.example4';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const LayoutDemo: React.FC<Props> = (props) => {
  return (
    <div>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/layout.example1`).default
        }
      >
        <LayoutExample1 />
      </Demo>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/layout.example2`).default
        }
      >
        <LayoutExample2 />
      </Demo>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/layout.example3`).default
        }
      >
        <LayoutExample3 />
      </Demo>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/layout.example4`).default
        }
      >
        <LayoutExample4 />
      </Demo>
    </div>
  );
};
export default LayoutDemo;
