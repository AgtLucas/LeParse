import React from 'react';
import PrettyDate from './PrettyDate';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editText: ''
    }
  }

  render() {
    if (this.state.editing) {
      return(
        <div className="todo__item editing">
          <input
            ref="edit__input"
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            value={this.state.editText}
            />
          <a className={save} onClick={this._stopEdit}><i className="icon__submit" /></a>
        </div>
      );
    }

    return(
      <div className="todo__item">
        <div className="item__text">
          {this.props.item.text}
          <div className="options">
            <a onClick={this._startEdit}><i className="icon__edit" /></a>
            <a onClick={this._removeItem}><i className="icon__delete" /></a>
          </div>
        </div>
        <div className="item__date">
          <PrettyDate value={this.props.item.createdAt} />
        </div>
      </div>
    );
  }

  _startEdit() {
    this.setState({
      editText: this.props.item.text,
      editing: true
    }, () => {
      let node = this.refs.edit__input.getDOMNode();
      node.focus();
      let len = this.state.editText.length;
      node.setSelectionRange(len, len);
    });
  }

  _onChange(e) {
    this.setState({
      editText: e.target.value
    });
  }

  _onKeyDown(e) {
    if (e.keyCode === 13) {
      this._stopEdit();
    }
  }

  _stopEdit() {
    if (this.state.editText) {
      this.props.update(this.props.item.id, this.state.editText);
      this.setState({
        editing: false
      });
    } else {
      this.props.destroy(this.props.item.id);
    }
  }

  _removeItem() {
    this.props.destroy(this.props.item.id);
  }
}
