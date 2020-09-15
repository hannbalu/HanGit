var num = 5;
var testLine = /^[0-9\_]+$/;
var result=0;
var arr = ['BA','aOWVXARgUbJDG','OPPCSKNS','HFDJEEDA','ABBABBBBAABBBAABAAA'];
for(var i=0;i<num;i++){
    var line = arr[i];
    if(!testLine.test(line) && line.length<11){
        result++
    }
}

console.log(result);