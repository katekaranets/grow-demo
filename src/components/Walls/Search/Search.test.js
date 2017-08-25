import React from 'react';
import Search from './Search'
import Wall from '../Wall'
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import WALLS from '../../../stubs/walls.json';


it('test <Search/> can be rendered', () => {
    const component = renderer.create(
        <Search items={WALLS}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('test <Search/> filter', () => {
    const component = mount(
        <Search items={WALLS}/>
    );
    expect(component.find(Wall).length).toBe(WALLS.length);
    const input = component.find('.search-wall');
    input.simulate('change', {target: {value: 'd'}});
    expect(component.find(Wall).length).toBe(4);
});
