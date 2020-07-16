import React, { Component } from 'react';

import store from './store'
import ToDoListUI from './ToDoListUI'
import axios from 'axios'
/* import {GET_INPUT_VLAUE,ADD_ITEM,DELETE_ITEM } from './store/actionType' */
import {getInputValueAction,addItemAction, deleteItemAction, getListAction} from './store/actionCreators'


class toDoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange)
    }

    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        .then((res)=>{
            const data =res.data;
            const action =getListAction(data);
            store.dispatch(action)
        })
    }

    storeChange=()=>{
        this.setState(store.getState());
    }
    getInputValue=(e)=>{
        const action = getInputValueAction(e.target.value);
        store.dispatch(action);
    }
    addItem=()=>{
        const action=addItemAction();
        store.dispatch(action);
    }
    deleteItem=(index)=>{
        const action =deleteItemAction(index);
        store.dispatch(action);
    }
    render() {
        return (
            <ToDoListUI 
                placeHolder={this.state.placeHolder}
                getInputValue={this.getInputValue}
                inputValue={this.state.inputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                list={this.state.list}
            />
        )
    }
}

export default toDoList;