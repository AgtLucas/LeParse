import React from 'react'
import { render } from 'react-dom'
import Parse from 'parse'
import style from '../css/style.css'

Parse.initialize()

import TodoList from './components/TodoList'

render(
  <TodoList />,
  document.getElementById('root')
)
