import React, { Component } from 'react'
import axios from 'axios'
import { Jumbotron } from 'reactstrap'

//Components
import Form from './Form'
import List from './List'

const API_URL = 'http://localhost:3030/todo/'

class App extends Component {
		constructor(props){
				super(props)
					this.state = {
						items: []
			}
			this.addNewTodo = this.addNewTodo.bind(this)
			this.toggleTodo = this.toggleTodo.bind(this)
			this.destroyTodo = this.destroyTodo.bind(this)
		}
		
		fetchTodos(){
			return axios.get(API_URL)
			.then(res => {
				let items = res.data
				this.setState({items})
			})
			.catch(e => console.error(e))
		}

		addNewTodo(todo){
			return axios.post(API_URL,todo)
				.then(res => this.fetchTodos())
				.catch(e => console.error(e))
		}

		destroyTodo(id){
			return axios.delete(API_URL+id)
				.then(res => this.fetchTodos())
				.catch(e => console.error(e))
		}

		toggleTodo(id){
			return axios.post(API_URL+'toggle/'+id)
				.then(res => this.fetchTodos())
				.catch(e => console.error(e))
		}

		componentDidMount(){
			return this.fetchTodos()
		}

  render() {
		let addNewTodo = this.addNewTodo
		let destroyTodo = this.destroyTodo
		let toggleTodo = this.toggleTodo
	  let { items } = this.state
	return (
	  <div className='container'>
		<Jumbotron>
			<h1>To-do List</h1>
			<h3>Add your daily tasks here!</h3>
		</Jumbotron>
		<Form addNewTodo={addNewTodo} />
		<List items={items} destroyTodo={destroyTodo} toggleTodo={toggleTodo} />
	  </div>
	);
  }
}

export default App;
