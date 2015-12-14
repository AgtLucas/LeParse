import { Parse } from 'parse';
import ParseReact from 'parse-react';
import React from 'react';
var ParseComponent = ParseReact.Component(React);

import TodoItem from './TodoItem';
import TodoCreator from './TodoCreator';

export default class TodoList extends ParseComponent {
  observe(props, state) {
    return {
      items: new Parse.Query('TodoItem').ascending('createdAt')
    };
  }

  render() {
    return(
      <div className={this.pendingQueries().length ? 'todo__list loading' : 'todo__list'}>
        <a onClick={this._refresh.bind(this)} className="refresh">Refresh</a>
        {this.data.items.map((i) => {
          return (
            <TodoItem key={i.id} item={i} update={this._updateItem} destroy={this._destroyItem} />
          );
        }, this)}
        <TodoCreator submit={this._createItem} />
      </div>
    );
  }

  _refresh() {
    this.refreshQueries('items');
  }

  _createItem(text) {
    ParseReact.Mutation.Create('TodoItem', {
      text: text
    }).dispatch();
  }

  _updateItem(id, text) {
    ParseReact.Mutation.Set(id, {
      text: text
    }).dispatch();
  }

  _destroyItem(id) {
    ParseReact.Mutation.destroy(id).dispatch();
  }
}
