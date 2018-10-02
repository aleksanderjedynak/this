const promise = new Promise((resolve, reject)=>{
    setTimeout(() => console.log("done") || resolve("resolve promise!"), 1500);
});

setTimeout(()=>{
    promise.then((resolved) => console.log(resolved));
}, 2500);