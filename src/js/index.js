import React from 'react';
import { render } from 'react-dom';
import style from '../css/style.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <h1 className={style.wtf}>Hello App!</h1>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
