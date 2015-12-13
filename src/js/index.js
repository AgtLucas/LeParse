import React from 'react';
import { render } from 'react-dom';

class Index extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello App!</h1>
      </div>
    );
  }
}

render(
  <Index />,
  document.getElementById('root');
);
