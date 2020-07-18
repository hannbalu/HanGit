import {GET_INPUT_VLAUE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionType'
import axios from 'axios'

export const getInputValueAction = (value)=>(
    {
        type:GET_INPUT_VLAUE,
        value
    }
)

export const addItemAction = ()=>(
    {
        type:ADD_ITEM,
    }
)

export const deleteItemAction = (index)=>(
    {
        type:DELETE_ITEM,
        index
    }
)

export const getListAction = (data)=>(
    {
        type:GET_LIST,
        data
    }
)

export const getToDoListAction = ()=>{
    return (dispatch)=>{
        axios.get('https://getman.cn/mock/Hannibalu666/to/demo0101')
        .then((res)=>{
            const data =res.data;
            const action = ()=>getListAction(data);
            dispatch(action);
            console.log(data);
        })
    }
}