function log(...string){
    let str = string.join(' ');
    return `(app)${str}`;
}
console.log(log('hello world','hello js'));