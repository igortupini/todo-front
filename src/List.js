import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button} from 'reactstrap'
import cx from 'classnames'
import styles from './List.module.css'

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({items: newProps.items})
    }
    
    renderList(){
        return this.state.items.map((item) => {
            return(
                <ListGroupItem
                    onClick={() => this.props.toggleTodo(item.id)} 
                    className={cx(item.checked&&styles['checked'],styles['listItem'])}
                    key={item.id}>
                    <div className={styles['titleWrapper']}>
                        <ListGroupItemHeading>{item.title} - {item.created_at}</ListGroupItemHeading>
                        <Button color='link' onClick={() => this.props.destroyTodo(item.id)}>Delete</Button>
                    </div>
                    <ListGroupItemText>{item.content}</ListGroupItemText>
                </ListGroupItem>
            )
        })
    }

    render(){
        return (
        <ListGroup className={styles['listGroup']}>
			{this.renderList()}
		</ListGroup>
        )
    }
}

export default List