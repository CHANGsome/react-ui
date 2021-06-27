import * as React from 'react';
import './index.scss';
import TreeItem from './components/TreeItem';

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
export type TreeProps = PartialProps & (MultipleSelected | SingleSelected);
const Tree: React.FC<TreeProps> = (props) => {
  const {
    children,
    dataSource,
    selected,
    multiple,
    onChangeSelected,
    ...rest
  } = props;

  return (
    <div {...rest}>
      {dataSource?.map((item) => (
        <TreeItem key={item.value} item={item} level={0} treeProps={props} />
      ))}
    </div>
  );
};
export default Tree;
