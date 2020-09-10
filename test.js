function house(person) {
    // write code here
    let arr = [];
    let result = 0;
    let i = 0;
    let j = 1;
    for (let i = 0; i < person.length; i++) {
        if (person[i]) arr[i] = 1;
    }
    while (i < person.length - 1) {
        if (!person[j]) {
            i++;
            j = i + 1;
        } else {
            if (person[i] > person[j] && person[j] < person[j - 1]) {
                arr[i]++;
                j++;
            } else {
                i++;
                j = i + 1;
            }
        }

    }
    if (person[person.length - 1] > person[person.length - 2]) {
        arr[person.length - 1] = arr[person.length - 2] + 1
    }
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}

console.log(house([ 3, 2, 4]));