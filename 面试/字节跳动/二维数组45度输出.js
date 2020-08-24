/* 二维数组，斜45度角输出 [

    [1, 2, 3]， 
    [4, 5, 6]， 
    [7, 8, 9]，
    
    ]
    
    1 4 2 7 5 3 8 6 9 */

function Arr(arr){
    let newArr =[];
    let number = (arr.length-1)*(arr.length-1);
    let i = 0;
    let j = 0;
    let temp = 0;
    while(temp<=number){
        if(i<arr.length && i>-1 && j<arr[i].length & j>-1){
            newArr.push(arr[i][j]);
            i--;
            j++;
            
        }else{
            temp++;
            j=temp-j;
            i=temp-j;
        }
    }
    return newArr
}
let arr1 = [

    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9],
    
    ]
console.log(Arr(arr1));