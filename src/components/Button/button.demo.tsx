import * as React from 'react';
import Demo from '../Demo';
import ButtonExample1 from './examples/button.example1';
import ButtonExample2 from './examples/button.example2';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const ButtonDemo: React.FC<Props> = (props) => {
  return (
    <div>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/button.example1`).default
        }
      >
        <ButtonExample1 />
      </Demo>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/button.example2`).default
        }
      >
        <ButtonExample2 />
      </Demo>
    </div>
  );
};
export default ButtonDemo;
