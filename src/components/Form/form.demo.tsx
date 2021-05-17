import * as React from 'react';
import Demo from '../Demo';
import FormExample1 from './examples/form.example1';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const FormDemo: React.FC<Props> = (props) => {
  return (
    <div>
      <Demo
        code={
          // eslint-disable-next-line import/no-webpack-loader-syntax
          require(`!!raw-loader!./examples/form.example1`).default
        }
      >
        <FormExample1 />
      </Demo>
    </div>
  );
};
export default FormDemo;
