import * as React from 'react';
import Demo from '../Demo';
import ScrollExample from './scroll.example';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const FormDemo: React.FC<Props> = (_props) => {
  return (
    <div>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/form.example1`).default
        }
      >
        <ScrollExample />
      </Demo>
    </div>
  );
};
export default FormDemo;
