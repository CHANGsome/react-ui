import classNames from "../classnames";

describe('classnames', () => {
  it('接受一个参数', () => {
    const result = classNames('a');
    expect(result).toEqual('a');
  })
  it('接受两个参数', () => {
    const result = classNames('a','b');
    expect(result).toEqual('a b');
  })
  it('其中一个参数是undefined', () => {
    const result = classNames('a',undefined);
    expect(result).toEqual('a');
  })
})
