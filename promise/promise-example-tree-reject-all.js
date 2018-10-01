/**3 */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "foo:)");
});

const promise2 = 1234567890;

const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "wrong slow");
});

const promise4 = Promise.reject(new Error("wrong promise!"));

Promise.all([promise1, promise2, promise3, promise4])
    .then((values) => { console.log(values) })
    .catch((err) => { console.error(err.message) });