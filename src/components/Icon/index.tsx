import './importAll';
import React from "react";
import './icon.scss'
import classNames from "../../utils/classnames";

/**
 *
 * 引入svg的步骤：
 * 1. 安装svg-sprite-loader
 * 2. 将svg放入src/assets文件夹
 * 3. 在代码里引入svg：import '../../assets/wechat.svg';
 * 4. 使用svg标签展示图标：#wechat
 */

interface IconType extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconType> = ({name, className, children, ...restProps}) => {
  return (
    <svg className={classNames('react-ui-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};
export default Icon;
