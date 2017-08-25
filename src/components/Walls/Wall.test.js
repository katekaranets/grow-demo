import React from 'react';
import ReactDOM from 'react-dom';
import Wall from './Wall'
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

it('test <Wall/> can be rendered', () => {
    const component = renderer.create(
        <Wall wall={{
            "name": "David Lynch's Climbing wall",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "city": "Minsk",
            "startWork": "09:00",
            "finishWork": "23:00",
            "wallHeight": 4.2,
            "address": "David Lynch street",
            "cost": 15,
            "boulder": true
        }}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('test <Wall/> close and open', () => {
    const component = mount(
        <Wall wall={{
            "name": "David Lynch's Climbing wall",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "city": "Minsk",
            "startWork": "09:00",
            "finishWork": "23:00",
            "wallHeight": 4.2,
            "address": "David Lynch street",
            "cost": 15,
            "boulder": true
        }}/>
    );
    expect(component.find('.wall').hasClass('wall-info-displayed')).toBe(false);
    component.find('.wall-name').simulate('click');
    expect(component.find('.wall').hasClass('wall-info-displayed')).toBe(true);
    component.find('.wall-name').simulate('click');
    expect(component.find('.wall').hasClass('wall-info-displayed')).toBe(false);
});
