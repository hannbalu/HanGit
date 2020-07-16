const defaultState={
    inputValue:'输入添加列',
    value:'',
    list:[
        '学习react',
        '学习redux',
        '学习route',
        '其他前端面试题',
        '剑指offer 算法题'
    ],
}

export default (state = defaultState,action)=>{
/*     let newState = JSON.parse(JSON.stringify(state)); */
    switch(action.type){
        case 'changeInputValue':
            state.value=action.value;
        break;
        case 'addItem':
            state.list.push(state.value);
            state.value = '';
        break; 
    }
    console.log(state);
    return state
}