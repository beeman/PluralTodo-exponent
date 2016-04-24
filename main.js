import React from 'react-native'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

let {
  AppRegistry,
  Component,
  Navigator,
} = React

class PluralTodo extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      todos: [ {
        task: 'Learn React Native!',
      }, {
        task: 'Learn Redux!',
      } ]
    }
  }

  onAddStarted () {
    this.nav.push({
      name: 'taskform'
    })
  }

  onCancel () {
    this.nav.pop()
  }

  onAdd (task) {
    console.log('A task was added', task)
    this.state.todos.push({ task })
    console.log(this.state.todos)
    this.setState({ todos: this.state.todos })
    this.nav.pop()
  }

  renderScene (route, nav) {
    switch (route.name) {
    case 'taskform':
      return (
          <TaskForm
              onAdd={this.onAdd.bind(this)}
              onCancel={this.onCancel.bind(this)}
          />
      )
    default:
      return (
        <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
        />
      )
    }
  }

  configureScene () {
    return Navigator.SceneConfigs.FloatFromBottom
  }

  render () {
    return (
      <Navigator
          configureScene={this.configureScene}
          initialRoute={{ name: 'tasklist', index: 0 }}
          ref={((nav) => {
            this.nav = nav
          })}
          renderScene={this.renderScene.bind(this)}
      />
    )
  }

}

AppRegistry.registerComponent('main', () => PluralTodo)
