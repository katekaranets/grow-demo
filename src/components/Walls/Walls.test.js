import React from 'react';
import ReactDOM from 'react-dom';
import Walls from './Walls'
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Search from './Search/Search';

it('test <Walls/> can be rendered', () => {
    const component = renderer.create(
        <Walls />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});