let promise = new Promise((resolve, reject) => {
    let myVal = "start!";
    resolve(myVal);
});

let promiseOk = Promise.resolve("OK!@#$");
let promiseWrong = Promise.reject(new Error("wrong!@#$"));

promise
    .then((resolved)=>{
        console.log(resolved);
        return promiseOk;
     })
    .then((resolved) => {
        console.log(resolved);
        return promiseWrong;
     })
    .then((resolved) => {
        console.log(resolved);
        console.log("end");
    })
    .catch((rejected)=>{
        console.log(rejected.message);
        console.log('end catch');
    });
