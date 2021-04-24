import './importAll';
import React from "react";

/**
 *
 * 引入svg的步骤：
 * 1. 安装svg-sprite-loader
 * 2. 将svg放入src/assets文件夹
 * 3. 在代码里引入svg：import '../../assets/wechat.svg';
 * 4. 使用svg标签展示图标：#wechat
 */

interface  IconType{
    name: string;
}
const Icon: React.FC<IconType> = (props) => {
    const {name} = props;
  return (
    <div>
      <svg>
        <use xlinkHref={`#${name}`}/>
      </svg>
    </div>
  );
};
export default Icon;
