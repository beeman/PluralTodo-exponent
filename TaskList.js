import React from 'react-native'

const {
  // ListView,
  Text,
  View,
} = React

const styles = React.StyleSheet.create({
  container: {
    paddingTop: 40,
  }
})

class TaskList extends React.Component {
  constructor (props, context) {
    super(props, context)

    // const ds = new ListView.dataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    // })
    //
    // this.state = {
    //   dataSource: ds.cloneWithRows(props.todos)
    // }
  }
  //
  // renderRow(todo) {
  //   return (
  //     <Text>{todo.task}</Text>
  //   )
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text>This is my task list</Text>
      </View>
    )
  }
}

TaskList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default TaskList