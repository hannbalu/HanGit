const defaultState = {
    placeHolder:'请输入添加内容',
    inputValue:'',
    list:[
        '学习react',
        '学习redux',
        '学习route',
        '牛客面试题',
        '算法——剑指offer'
    ]
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'getInputValue':
            state.inputValue=action.value;
        break
        case 'addItem':
            state.list.push(state.inputValue);
            state.inputValue='';
        break
        case 'deleteItem':
            state.list.splice(action.index,1);
        break
        case 'getList':
            state.list=action.data.list;
        break
    }
    return state;
}