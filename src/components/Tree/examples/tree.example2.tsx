import * as React from 'react';
import Tree, { TreeDataItem } from '../index';
import { useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const TreeExample2: React.FC<Props> = (props) => {
  const [treeData] = useState<Array<TreeDataItem>>([
    {
      text: '1',
      value: '1',
      children: [
        {
          text: '1.1',
          value: '1.1',
          children: [
            {
              text: '1.1.1',
              value: '1.1.1',
            },
            {
              text: '1.1.2',
              value: '1.1.2',
            },
          ],
        },
      ],
    },
    { text: '11', value: '11' },
    {
      text: 'show 2',
      value: '2',
      children: [
        {
          text: 'show 2.1',
          value: '2.1',
        },
      ],
    },
  ]);
  const [selectedValue, setSelectedValue] = useState('1');

  return (
    <div>
      <h1>Tree Example2：单选</h1>
      <Tree
        dataSource={treeData}
        style={{ width: '200px' }}
        selected={selectedValue}
        multiple={false}
        onChangeSelected={(newSelected) => setSelectedValue(newSelected)}
      />
    </div>
  );
};
export default TreeExample2;
