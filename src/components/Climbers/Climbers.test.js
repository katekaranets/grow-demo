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

// it('test addition of new climber to <Climbers/>  list', () => {
//     const component = mount(
//         <Climbers items={CLIMBERS}/>
//     );
//     expect(component.find(Climber).length).toBe(CLIMBERS.length - 1);
//     const inputName = component.find('.new-climber-name');
//     const inputCity = component.find('.new-climber-city');
//     const inputAge = component.find('.new-climber-age');
//     const inputPrises = component.find('.new-climber-prises');
//     inputName.simulate('change', {target: {value: 'Alex'}});
//     inputCity.simulate('change', {target: {value: 'Moscow'}});
//     inputAge.simulate('change', {target: {value: '16'}});
//     inputPrises.simulate('change', {target: {value: '4'}});
//     component.find('.add-climber-button').simulate('click');
//     expect(component.find(Climber).length).toBe(CLIMBERS.length);
// });