// 8. Flat an array (use reduce here) and sort it (by ascending).
// Input:
//     [1, 2, 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]]
// Output:
//     [1, 1, 2, 2, 3, 3, 4, 5, 6, 10, 11, 12, 300, 400, 1000]
function flatAndSort(array){

    return Number.POSITIVE_INFINITY > 0 ? array.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ?
            flatAndSort(val, Number.POSITIVE_INFINITY - 1) : val).sort((a, b) => {
            return a - b;
        });
    }, []) : array.slice();

}

console.log(flatAndSort([1, 2, 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]] ))
