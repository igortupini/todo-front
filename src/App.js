import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

//Components
import Form from './Form'
import List from './List'

class App extends Component {
		constructor(props){
				super(props)
					this.state = {
						items: []
			}
			this.addNewTodo = this.addNewTodo.bind(this)
			this.destroyTodo = this.destroyTodo.bind(this)
		}
	
		addNewTodo(todo){
			let items = [...this.state.items,{...todo,id:this.state.items.length}]
			this.setState({items})
		}

		destroyTodo(id){
			let items = this.state.items.filter(item => (item.id != id) && item)
			this.setState({items})
		}

  render() {
		let addNewTodo = this.addNewTodo
		let destroyTodo = this.destroyTodo
	  let { items } = this.state
	return (
	  <div className='container'>
		<Jumbotron>
			<h1>To-do List</h1>
			<h3>Add your daily tasks here!</h3>
		</Jumbotron>
		<Form addNewTodo={addNewTodo} />
		<List items={items} destroyTodo={destroyTodo} />
	  </div>
	);
  }
}

export default App;
