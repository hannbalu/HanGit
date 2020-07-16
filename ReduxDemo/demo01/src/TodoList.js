import React, { Component } from 'react';
import 'antd/dist/antd.css'
import {Input , Button, List} from 'antd'
import store from './store'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState();
        store.subscribe(this.storeChange);
    }

    changeInputValue=(e)=>{
        const action={
            type:'changeInputValue',
            value:e.target.value,
        };
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState());
    }
    clickBtn = ()=>{
        const action ={
            type:'addItem',
        }
        store.dispatch(action);
    }
    render() {
        const data = this.state;
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={data.inputValue}
                        value={data.value}
                        style={{ width:'250px',marginRight:'10px'}}
                        onChange={this.changeInputValue}    
                    />
                    <Button 
                        type="primary"
                        onClick={this.clickBtn}
                        >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;
