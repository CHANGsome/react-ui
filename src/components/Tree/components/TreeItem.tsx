import * as React from 'react';
import { ChangeEventHandler, useCallback, useRef, useState } from 'react';
import Icon from '../../Icon';
import { TreeDataItem, TreeProps } from '../index';
import scopedClassMaker from '../../../utils/scopedClassMaker';
import useUpdate from '../../../hooks/useUpdate';

interface TreeItemProps {
  item: TreeDataItem;
  level: number;
  treeProps: TreeProps;
  onItemChange: (values: Array<string>) => void;
}
const collectChildrenValues = (item: TreeDataItem): any => {
  return flatten(
    item.children?.map((itemChild) => [
      itemChild.value,
      collectChildrenValues(itemChild),
    ])
  );
};
interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}
const flatten = (arr?: RecursiveArray<string>): Array<string> => {
  if (!arr) {
    return [];
  }
  // 普通循环写法
  // const result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] instanceof Array) {
  //     result.push(...flatten(arr[i] as Array<string>));
  //   } else {
  //     result.push(arr[i] as string);
  //   }
  // }
  // return result;

  // reduce写法
  return arr.reduce<Array<string>>((result, current) => {
    return result.concat(
      typeof current === 'string' ? current : flatten(current)
    );
  }, []);
};
function arrayIntersect<T>(arr: Array<T>, targetArr: Array<T>): Array<T> {
  // arr1中有几个子元素存在于arr2中
  const result: Array<T> = [];
  for (let i = 0; i < arr.length; i++) {
    if (targetArr.indexOf(arr[i]) >= 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
const sc = scopedClassMaker('react-ui-tree');

const TreeItem: React.FC<TreeItemProps> = (props) => {
  const [folded, setFolded] = useState(false);
  const treeChildrenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { item, level, treeProps, onItemChange, ...rest } = props;
  const { selected, multiple, onChangeSelected, autoSelected } = treeProps;

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
    const childrenValues = collectChildrenValues(item);
    if (e.target.checked) {
      if (multiple) {
        // 多选
        if (autoSelected) {
          // 支持子元素自动选中
          // @ts-ignore
          onItemChange([...selected, item.value, ...childrenValues]);
        } else {
          // 不支持子元素自动选中
          // @ts-ignore
          onItemChange([...selected, item.value]);
        }
      } else {
        // 单选
        // @ts-ignore
        onChangeSelected(item.value);
      }
    } else {
      multiple
        ? // @ts-ignore
          onItemChange(
            // @ts-ignore
            selected!.filter((value) => {
              return autoSelected
                ? value !== item.value && childrenValues.indexOf(value) === -1
                : value !== item.value;
            })
          )
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
  const handleItemChange = (values: Array<string>) => {
    const childrenValues = collectChildrenValues(item);
    const intersectValues = arrayIntersect<string>(values, childrenValues);
    if (intersectValues.length !== 0) {
      props.onItemChange(Array.from(new Set(values.concat(item.value))));
      // 全选：intersectValues.length === childrenValues.length
      // 部分选中：intersectValues.length !== childrenValues.length
      inputRef.current!.indeterminate =
        intersectValues.length !== childrenValues.length;
    } else {
      // 子元素全不选
      inputRef.current!.indeterminate = false;
      props.onItemChange(values.filter((v) => v !== item.value));
    }
  };
  return (
    <div key={item.value} className={sc(classes)} {...rest}>
      <div className={sc('text')}>
        <input
          ref={inputRef}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
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
            onItemChange={handleItemChange}
          />
        ))}
      </div>
    </div>
  );
};
export default TreeItem;
