interface Options {
  extra: string | undefined;
}
interface ClassToggles {
  [K: string]: boolean;
}
const scopedClassMaker = (prefix: string) => {
  return function (className?: string | ClassToggles, options?: Options) {
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
