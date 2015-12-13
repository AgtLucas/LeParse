import React from 'react';

export default class TodoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return(
      <div className="todo__creator">
        <input
          value={this.state.value}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          />
        <a onClick={this._submit} className="todo__submit">Add</a>
      </div>
    );
  }

  _onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  _onKeyDown(e) {
    if (e.keyCode === 13) {
      this._submit();
    }
  }

  _submit() {
    this.props.submit(this.state.value);
    this.setState({
      value: ''
    });
  }
}
