import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index.jsx';

test('Button', () => {
    const component = renderer.create(
       <Button>Default Button</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Button with full width', () => {
    const component = renderer.create(
       <Button fullWidth>Default Button</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Button with custom width', () => {
    const component = renderer.create(
       <Button width="20rem">Default Button</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Button with custom theme', () => {
    const component = renderer.create(
       <Button theme={{ default: 'red', color: '#fff' }}>Default Button</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
