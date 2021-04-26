import * as renderer from 'react-test-renderer';
import Icon from '../index';
import {mount,configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

describe('Icon', () => {
  it('render Icon successfully', () => {
    const json = renderer.create(<Icon name="bilibili"/>).toJSON();
    expect(json).toMatchSnapshot();
  })
  it('onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name='bilibili' onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  })
})
