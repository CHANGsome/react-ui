import * as React from 'react';
import { ChangeEventHandler, useCallback, useState } from 'react';
import Icon from '../../Icon';
import { TreeDataItem, TreeProps } from '../index';
import scopedClassMaker from '../../../utils/scopedClassMaker';
import useUpdate from '../../../hooks/useUpdate';

type TreeItemProps = {
  item: TreeDataItem;
  level: number;
  treeProps: TreeProps;
};
const sc = scopedClassMaker('react-ui-tree');

const TreeItem: React.FC<TreeItemProps> = (props) => {
  const { item, level, treeProps, ...rest } = props;
  const { selected, multiple, onChangeSelected } = treeProps;
  const [folded, setFolded] = useState(false);
  useUpdate(
    folded,
    useCallback(() => {
      console.log('folded changed', folded);
    }, [folded])
  );
  const classes = {
    [`level-${level}`]: true,
    item: true,
  };
  const checked = multiple
    ? selected.indexOf(item.value) >= 0
    : selected === item.value;
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      multiple
        ? // @ts-ignore
          onChangeSelected([...selected, item.value])
        : // @ts-ignore
          onChangeSelected(item.value);
    } else {
      multiple
        ? // @ts-ignore
          onChangeSelected(selected.filter((value) => value !== item.value))
        : // @ts-ignore
          onChangeSelected('');
    }
  };
  const unfoldChildren = () => {
    setFolded(false);
  };
  const foldChildren = () => {
    setFolded(true);
  };

  return (
    <div key={item.value} className={sc(classes)} {...rest}>
      <div className={sc('text')}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {item.text}
        {item.children &&
          (folded ? (
            <Icon
              name={'unfold'}
              className={sc('fold-icon')}
              onClick={unfoldChildren}
            />
          ) : (
            <Icon
              name={'fold'}
              className={sc('fold-icon')}
              onClick={foldChildren}
            />
          ))}
      </div>
      <div className={sc({ fold: folded })}>
        {item.children?.map((subItem) => (
          <TreeItem
            key={subItem.value}
            item={subItem}
            level={level + 1}
            treeProps={treeProps}
          />
        ))}
      </div>
    </div>
  );
};
export default TreeItem;
