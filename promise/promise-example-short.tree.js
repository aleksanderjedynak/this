new Promise( (resolve, reject) =>{
    setTimeout( (val = 10)=> resolve(val), 1500 );

})
.then( (value)=> {
    console.log(['1='], value);
    return value + 5;
})
.then((value) => {
    console.log(['2='], value);
    return value + 5;
})
.then((value) => {
    console.log(['3='], value);
    throw value * 2;
})
.then((value) => {
    console.log(['end='], value);
})
.catch((err) =>{
    console.warn("error", err);
});