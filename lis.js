//const arr = [1456,-1,2,4,123,9,5,12,3,22,6,11,7,8,11,34];
//const arr = [33,66,2,3,4,5,6,7,8,9,12,77,88,99,-1,0,11,-33,345];
const arr = [33, 44, 55, 3, 4, 5, 6, 7, -10, 8, -9, -8, -7, -2, 1, 22, 20, 33, 44, 30, 111, -1];
//const arr = [81,10,11,12,13,14,1,15,2,16,3,20,4,5,6,8,9];
//const arr = [10, 11, 12, 13, 14, 1, 15, 2, 16, 3, 20, 4, 5, 6, 8, 9];
//const arr = [3,7,1,45,4,9,34];

const accFunc = (acc, curr) => {
    let len = acc.length - 1;
    if (acc[len] < curr) {
        acc.push(curr);
    } else if (acc[len] > curr && accFunc.shuffle) {
        acc[len] = curr;
        acc = acc.reduce(accFunc, [acc[0]]);
    }
    return acc;
};

const printResult = (result) => console.log(`size:  ${result.length}  --  ${result}`);


for (let i = 0; i < arr.length; i++) {
    let tmpArray = arr.slice(i, arr.length);

    accFunc.shuffle = 0;
    printResult((tmpArray).reduce(accFunc, [tmpArray[0]]));

    accFunc.shuffle = 1;
    printResult((tmpArray).reduce(accFunc, [tmpArray[0]]));
};



