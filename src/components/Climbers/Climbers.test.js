import React from 'react';
import ReactDOM from 'react-dom';
import Climbers from './Climbers';
import Climber from './Climber';
import AddClimber from './AddClimber';
import CLIMBERS from '../../stubs/climbers.json';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test <Climbers/> can be rendered', () => {
    const component = renderer.create(
        <Climbers />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('test <Climber/> can be rendered', () => {
    const component = renderer.create(
        <Climber climber={{
            "name": "Eric",
            "age": 25,
            "numberOfPrise": 54,
            "city": "Minsk",
            "id": 7
        }}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('test <AddClimber/> can be rendered', () => {
    const component = renderer.create(
        <AddClimber />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('test deleting of climber from <Climbers/>  list', () => {
    const component = mount(
        <Climbers items={CLIMBERS}/>
    );
    expect(component.find(Climber).length).toBe(CLIMBERS.length);
    component.find('.delete-climber').first().simulate('click');
    expect(component.find(Climber).length).toBe(CLIMBERS.length - 1);
});