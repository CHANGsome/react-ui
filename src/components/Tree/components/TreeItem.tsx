import * as React from 'react';
import { ChangeEventHandler, useCallback, useRef, useState } from 'react';
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
  const [folded, setFolded] = useState(false);
  const treeChildrenRef = useRef<HTMLDivElement>(null);

  const { item, level, treeProps, ...rest } = props;
  const { selected, multiple, onChangeSelected } = treeProps;
  useUpdate(
    folded,
    useCallback(() => {
      if (!treeChildrenRef.current) {
        return;
      }
      // 增加展开折叠的过渡效果
      if (!folded) {
        // 打开，设置高度
        console.log('打开');
        treeChildrenRef.current.style.height = 'auto';
        const { height } = treeChildrenRef.current.getBoundingClientRect();
        treeChildrenRef.current.style.height = '0';
        treeChildrenRef.current.getBoundingClientRect();
        treeChildrenRef.current.style.height = height + 'px';
      } else {
        // 关闭，高度变为0
        console.log('关闭');
        const { height } = treeChildrenRef.current.getBoundingClientRect();
        // 一开始的高度属性值为auto，直接变为0不会有过渡效果，需要先设置高度为一个定值
        treeChildrenRef.current.style.height = height + 'px';
        // 这句话不写两个设置高度的语句会被合并执行
        treeChildrenRef.current.getBoundingClientRect();
        treeChildrenRef.current.style.height = '0';
      }
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
      <div className={sc('fold')} ref={treeChildrenRef}>
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
