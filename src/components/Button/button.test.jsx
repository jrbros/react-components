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
