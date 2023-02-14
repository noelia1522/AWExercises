function sumArray(array){
    let result;
    array.forEach(item => {
        if(Number.isInteger(item)) {
            result=result+item;
        } else {
            return result=NaN;
        }
    });

    return result;
}


module.exports = sumArray;
