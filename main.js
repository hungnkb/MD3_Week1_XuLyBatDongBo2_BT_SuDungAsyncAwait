let checkArray = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr instanceof Array) {
            resolve(arr);
        } else {
            reject('This is not a array');
        }
    })

}

let sum = (arr) => {
    let total = 0;
    for (let i of arr) {
        total += i;
    }
    return total;
}

let printAll = async (arr) => {
    await checkArray([1, 2, 3]).then((arr) => console.log(sum(arr)));
    await checkArray([3, 4, 5, 6]).then((arr) => console.log(sum(arr)))
    await checkArray(1, 2, 3, 4).catch((message) => console.log(message))
}

printAll()








