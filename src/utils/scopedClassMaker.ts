interface Options {
  extra: string | undefined;
}
interface ClassToggles {
  [K: string]: boolean;
}
const scopedClassMaker = (prefix: string) => {
  return function (className?: string | ClassToggles, options?: Options) {
    // ClassToggles: {x:true, y: true}, 拼接多个带前缀的 'react-ui-x react-ui-y'
    // options: {extra: 'z'} 拼接通过props传进来的，不带前缀的，'react-ui-componentName z'
    return Object.entries(
      className instanceof Object
        ? className
        : { [className || '']: className || '' }
    )
      .filter((kv) => kv[1] !== false)
      .map((kv) => kv[0])
      .map((name) => [prefix, name].filter(Boolean).join('-'))
      .concat((options?.extra && options.extra) || [])
      .join(' ');
  };
};
export default scopedClassMaker;
