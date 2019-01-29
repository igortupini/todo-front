import React from "react";
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Button
} from "reactstrap";
import cx from "classnames";
import moment from 'moment'
import styles from "./List.module.css";

const List = props => {
    return (
        <ListGroup className={styles["listGroup"]}>
            {props.items.map(item => {
                return (
                    <ListGroupItem
                        onClick={() => props.toggleTodo(item.id)}
                        className={cx(
                            item.checked && styles["checked"],
                            styles["listItem"]
                        )}
                        key={item.id}
                    >
                        <div className={styles["titleWrapper"]}>
                            <ListGroupItemHeading><i className={cx(!item.checked&&styles['checkedContent'],styles['inline-icon'],'large','material-icons')}>check_circle</i> {item.title}</ListGroupItemHeading>
                            <Button
                                color="link"
                                onClick={() => props.destroyTodo(item.id)}
                            >
                                Delete
                            </Button>
                        </div>
                        <ListGroupItemText className={item.checked&&styles['checkedContent']}>{item.content}<br /><small className='text-muted'>{moment(item.created_at).format('HH:mm - DD/MM/YYYY')}</small></ListGroupItemText>
                        
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

//class List extends Component {
//    constructor(props){
//        super(props)
//        this.state = {
//            items: []
//        }
//    }
//
//    componentWillReceiveProps(newProps){
//        this.setState({items: newProps.items})
//    }
//
//    renderList(){
//        return this.state.items.map((item) => {
//            return(
//                <ListGroupItem
//                    onClick={() => this.props.toggleTodo(item.id)}
//                    className={cx(item.checked&&styles['checked'],styles['listItem'])}
//                    key={item.id}>
//                    <div className={styles['titleWrapper']}>
//                        <ListGroupItemHeading>{item.title} - {item.created_at}</ListGroupItemHeading>
//                        <Button color='link' onClick={() => this.props.destroyTodo(item.id)}>Delete</Button>
//                    </div>
//                    <ListGroupItemText>{item.content}</ListGroupItemText>
//                </ListGroupItem>
//            )
//        })
//    }
//
//    render(){
//        return (
//        <ListGroup className={styles['listGroup']}>
//			{this.renderList()}
//		</ListGroup>
//        )
//    }
//}

export default List;
