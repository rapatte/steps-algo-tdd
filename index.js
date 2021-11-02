module.exports = steps = (n) => {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if(row >= column) stair += '#'
            else stair += ' '
        }    
        console.log(stair);    
    }
}