import classNames from '../classnames';
import scopedClassMaker from '../scopedClassMaker';

describe('classnames', () => {
  it('接受1个参数', () => {
    const result = classNames('a');
    expect(result).toEqual('a');
  });
  it('接受2个参数', () => {
    const result = classNames('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受其中一个参数是undefined', () => {
    const result = classNames('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受0个参数', () => {
    const result = classNames();
    expect(result).toEqual('');
  });
  it('接受一些奇怪的参数', () => {
    const result = classNames('name', '中文', null, undefined, false);
    expect(result).toEqual('name 中文');
  });
});

describe('scopedClassMaker', () => {
  it('接受字符串或对象', () => {
    const sc = scopedClassMaker('gu-layout');
    expect(sc('')).toEqual('gu-layout');
    expect(sc('x')).toEqual('gu-layout-x');
    expect(sc({ y: true, z: false })).toEqual('gu-layout-y');
    expect(sc({ y: true, z: true })).toEqual('gu-layout-y gu-layout-z');
    expect(sc({ y: true, z: true }, { extra: 'red' })).toEqual(
      'gu-layout-y gu-layout-z red'
    );
  });
});
