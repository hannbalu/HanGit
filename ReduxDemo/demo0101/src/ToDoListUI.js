import React from 'react';

import 'antd/dist/antd.css';
import {Input,Button,List} from 'antd';

export default function(props){
    return(
        <div style={{margin:10}}>
                <Input
                    style={{marginRight:5,width:250}}
                    placeholder={props.placeHolder}
                    value={props.inputValue}
                    onChange={props.getInputValue}
                />
                <Button
                    type='primary'
                    onClick={props.addItem}
                >添加</Button>
                <List
                    style={{margin:10,width:300}}
                    bordered    
                    dataSource={props.list}
                    renderItem={(item,index)=><List.Item onClick={
                        ()=>{
                            props.deleteItem(index)
                        }
                    }>{item}</List.Item>}
                />
            </div>
    )
} 
/* 
class ToDoListUI extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={{margin:10}}>
                <Input
                    style={{marginRight:5,width:250}}
                    placeholder={this.props.placeHolder}
                    value={this.props.inputValue}
                    onChange={this.props.getInputValue}
                />
                <Button
                    type='primary'
                    onClick={this.props.addItem}
                >添加</Button>
                <List
                    style={{margin:10,width:300}}
                    bordered    
                    dataSource={this.props.list}
                    renderItem={(item,index)=><List.Item onClick={
                        ()=>{
                            this.props.deleteItem(index)
                        }
                    }>{item}</List.Item>}
                />
            </div>
        );
    }
}

export default ToDoListUI; */