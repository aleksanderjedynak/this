/**3 */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "promise1:)");
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "promise2:)");
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2100, "promise3:)");
});

Promise.race([promise1, promise2, promise3])
    .then((values) => { console.log(values) });