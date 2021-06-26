import * as React from 'react';
import './index.scss';
import scopedClassMaker from '../../utils/scopedClassMaker';
import { ChangeEventHandler, useState } from 'react';
import Icon from '../Icon';

export interface TreeDataItem {
  text: string;
  value: string;
  children?: Array<TreeDataItem>;
}
interface PartialProps extends React.HTMLAttributes<HTMLElement> {
  dataSource: Array<TreeDataItem>;
}
type MultipleSelected = {
  selected: Array<string>;
  multiple: true;
  onChangeSelected: (newSelected: string[]) => void;
};
type SingleSelected = {
  selected: string;
  multiple?: false;
  onChangeSelected: (newSelected: string) => void;
};
type Props = PartialProps & (MultipleSelected | SingleSelected);
const sc = scopedClassMaker('react-ui-tree');
const Tree: React.FC<Props> = (props) => {
  const {
    children,
    dataSource,
    selected,
    multiple,
    onChangeSelected,
    ...rest
  } = props;

  const RenderItem = (item: TreeDataItem, level: number) => {
    const [folded, setFolded] = useState(false);
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
          {item.children?.map((subItem) => RenderItem(subItem, level + 1))}
        </div>
      </div>
    );
  };
  return <div>{dataSource?.map((item) => RenderItem(item, 0))}</div>;
};
export default Tree;
