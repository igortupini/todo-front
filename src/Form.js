import React, { Component } from 'react';
import { InputGroup,Input,InputGroupAddon,Button } from 'reactstrap'
import styles from './Form.module.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            content: ''
        }
        this.handleChanges = this.handleChanges.bind(this)
    }

    handleChanges(event){
        let target = event.target
        let value = target.value
        let name = target.name
        this.setState({[name]: value})    
    }

    render(){
        let { title, content } = this.state
        return (
        <div>
            <InputGroup>
                <Input 
                    placeholder="What's in your mind?"
                    value={title}
                    name="title"
                    onChange={this.handleChanges}
                />
		    	<InputGroupAddon addonType='append'>
		    		<Button onClick={() => this.props.addNewTodo({title,content})} color='primary'>Click meee!</Button>
		    	</InputGroupAddon>
            </InputGroup>
            <Input 
                type='textarea'
                className={styles['contentInput']}
                value={content}
                name="content"
                onChange={this.handleChanges}
            />
        </div>
        )
    }
}

export default Form