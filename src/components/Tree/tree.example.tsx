import * as React from 'react';
import Tree, { TreeDataItem } from './index';
import { useState } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const TreeExample: React.FC<Props> = (props) => {
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
  const handleChangeChecked = (item: TreeDataItem, checked: boolean) => {
    if (checked) {
      setSelectedValues([...selectedValues, item.value]);
    } else {
      setSelectedValues(selectedValues.filter((value) => value !== item.value));
    }
  };

  return (
    <div>
      <h1>Tree Example 1</h1>
      <Tree
        dataSource={treeData}
        style={{ width: '200px' }}
        selectedValues={selectedValues}
        onChangeChecked={handleChangeChecked}
      />
    </div>
  );
};
export default TreeExample;
