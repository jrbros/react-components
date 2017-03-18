import { configure } from '@kadira/storybook';

import 'sanitize.css/sanitize.css';
import './storybook.css';

const req = require.context('./stories', true, /.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
