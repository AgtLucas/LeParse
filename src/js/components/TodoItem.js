import React from 'react';
import PrettyDate from './PrettyDate';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editText = ''
    }
  }
}
