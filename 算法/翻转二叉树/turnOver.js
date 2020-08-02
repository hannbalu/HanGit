let turnOver = function (obj) {
    let newObj = {
        value:null,
        left:{},
        right:{}
    };
    for (let i in obj) {
        switch (i) {
            case 'value':
                newObj.value = obj.value;
                break;
            case 'left':
                newObj.right = turnOver(obj.left);
                break;
            case 'right':
                newObj.left = turnOver(obj.right);
                break;
            default:
                newObj
                break;
        }
    }
    return newObj
}

let tree = {
    value:1,
    left:{
        value:2,
        left:{
            value:4,
            left:null,
            right:null,
        },
        right:{
            value:5,
            left:null,
            right:null,
        },
    },
    right:{
        value:3,
        left:{
            value:6,
            left:null,
            right:null,
        },
        right:{
            value:7,
            left:null,
            right:null,
        }
    },
}
console.time();
console.log(turnOver(tree));
console.timeEnd();