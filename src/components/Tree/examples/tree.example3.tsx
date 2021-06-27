import * as React from 'react';
import Tree, { TreeDataItem } from '../index';
import { useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const TreeExample3: React.FC<Props> = () => {
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
  const [selectedValues, setSelectedValues] = useState(['1.1', '1.1.2']);

  return (
    <div>
      <h1>Tree Example3：子元素跟随父元素自动选中</h1>
      <Tree
        dataSource={treeData}
        style={{ width: '200px' }}
        selected={selectedValues}
        multiple={true}
        onChangeSelected={(newSelected) => setSelectedValues(newSelected)}
      />
    </div>
  );
};
export default TreeExample3;
