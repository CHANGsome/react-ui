import * as React from 'react';
import './index.scss';
import scopedClassMaker from '../../utils/scopedClassMaker';

export interface TreeDataItem {
  text: string;
  value: string;
  children?: Array<TreeDataItem>;
}
interface Props extends React.HTMLAttributes<HTMLElement> {
  dataSource: Array<TreeDataItem>;
  selectedValues: Array<string>;
  onChangeChecked: (item: TreeDataItem, checked: boolean) => void;
}
const sc = scopedClassMaker('react-ui-tree');
const Tree: React.FC<Props> = (props) => {
  const {
    children,
    dataSource,
    selectedValues,
    onChangeChecked,
    ...rest
  } = props;

  const renderItem = (item: TreeDataItem, level: number) => {
    const classes = {
      [`level-${level}`]: true,
      item: true,
    };

    return (
      <div key={item.value} className={sc(classes)} {...rest}>
        <div className={sc('text')}>
          <input
            type="checkbox"
            checked={selectedValues.indexOf(item.value) >= 0}
            onChange={(e) => {
              onChangeChecked(item, e.target.checked);
            }}
          />
          {item.text}
        </div>
        {item.children?.map((subItem) => renderItem(subItem, level + 1))}
      </div>
    );
  };
  return <div>{dataSource?.map((item) => renderItem(item, 0))}</div>;
};
export default Tree;
