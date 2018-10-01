/**2 */
let promisePattern = (type, value) => {
    return new Promise((resolve, reject) => {
        type == 'resolve' ? 
            resolve(value) : 
            reject(new Error(value));
    });
}

let on4 = () => { return promisePattern('resolve','4444') }

let on5 = () => { return promisePattern('reject', 'Something happened!') }
// let on5 = () => { return new Promise((resolve, reject) => 
//     reject(new Error('Something happened!'))) }

let on6 = () => { return promisePattern('resolve', '6666') }

on4()
    .then((response) => {
        console.log(response);
        return on5();
    })
    .then((response) => {
        console.log(['after reject']);
        console.log(response);
        return on6();
    })
    .catch((error) => {
        console.error(error.message);
    });

