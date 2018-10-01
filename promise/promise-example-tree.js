/**2 */
let promisePattern = (value) => {
    return new Promise((resolve, reject) => {
        resolve(value);
    });
}

let on1 = () => { return promisePattern('11111') }
let on2 = () => { return promisePattern('2222') }
let on3 = () => { return promisePattern('3333') }
// let on3 = () => { return new Promise((resolve, reject) => resolve('33333')) }


on1()
    .then((response) => {
        console.log(response);
        return on2();
    })
    .then((response) => {
        console.log(response);
        return on3();
    })
    .then((response) => {
        console.log(response);
        console.log('END!!!');
    })
    .catch((error) => {
        console.error(error.message);
    });
