import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../../src/components/Button/index.jsx';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('full width', () => (
    <Button fullWidth onClick={action('clicked')}>Full width Button</Button>
  ))
  .add('custom width', () => (
    <Button width="20rem" onClick={action('clicked')}>20rem width Button</Button>
  ));;
