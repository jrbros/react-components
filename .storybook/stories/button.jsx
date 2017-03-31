import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../../src/components/Button/index.jsx';

const customTheme = {
    default: 'red',
    color: '#fff'
};

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('full width', () => (
    <Button fullWidth onClick={action('clicked')}>Full width Button</Button>
  ))
  .add('custom width', () => (
    <Button width="20rem" onClick={action('clicked')}>20rem width Button</Button>
  ))
  .add('custom theme', () => (
    <Button theme={customTheme} onClick={action('clicked')}>20rem width Button</Button>
  ));
