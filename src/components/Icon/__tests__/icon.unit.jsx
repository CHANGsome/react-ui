import * as renderer from 'react-test-renderer';
import Icon from '../index';

describe('Icon', () => {
  it('render Icon successfully', () => {
    const json = renderer.create(<Icon name="bilibili"/>).toJSON();
    expect(json).toMatchSnapshot();
  })
})
