import React from 'react';
import Icon from './index';

const IconExample: React.FC = (props) => {
  return (
    <div>
      <h1>Example</h1>
      <Icon name="bilibili" style={{ width: '60px', height: '60px' }} />
      <Icon
        name="wechat"
        style={{ width: '60px', height: '60px', marginLeft: '16px' }}
      />
    </div>
  );
};
export default IconExample;
