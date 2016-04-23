import React from 'react-native'
import TaskList from './TaskList'

let {
  AppRegistry,
  Component,
} = React

class PluralTodo extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      todos: [ {
        task: 'Learn react native',
      } ]
    }
  }

  render () {
    return <TaskList />
  }

}

AppRegistry.registerComponent('main', () => PluralTodo)
