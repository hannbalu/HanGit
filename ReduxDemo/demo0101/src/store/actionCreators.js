import {GET_INPUT_VLAUE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionType'

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