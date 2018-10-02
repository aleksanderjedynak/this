const promise = new Promise((resolve,reject)=>{
    resolve("done!");
});

promise
    .then((resolved)=> {
        console.log(resolved);
        throw new Error('wrong!');
    })
    .catch((rejected)=>{
        console.log(rejected.message);
        return "hahah this is ok!"
    })
    .then((resolved)=>{
        console.log(resolved);
        throw new Error('undefined!');
    })
    .then((resolved) => {
        console.log(resolved);
        return "undefined????? wtf"
    })
    .catch((rejected) => {
        console.log(rejected.message);
        return undefined;
    } )
    .then((resolved)=>{
        console.log('wow@@@');
    })
    .catch((err) => {
        console.error(['err=>'],err.message);
    })
