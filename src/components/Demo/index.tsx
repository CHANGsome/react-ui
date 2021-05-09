import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { useState } from 'react';
import Button from '../Button';

interface Props extends React.HTMLAttributes<HTMLElement> {
  code: string;
}

const Demo: React.FC<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const codes = (
    <Highlight {...defaultProps} code={props.code.trim()} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  return (
    <div>
      <div>{props.children}</div>
      <div>
        <Button onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>
        {codeVisible && codes}
      </div>
    </div>
  );
};
export default Demo;
