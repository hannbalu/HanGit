const defaultState={
    inputValue:'输入添加列',
    list:[
        '学习react',
        '学习redux',
        '学习route',
        '其他前端面试题',
        '剑指offer 算法题'
    ],
}

export default (state = defaultState,action)=>{
    switch(action.type){
        case 'changeInputValue':
            state.inputValue
    }
    console.log(state,action);
    return state
}