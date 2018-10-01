/**3 */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "foo:)");
});

const promise2 = 1234567890;

const promise3 = Promise.resolve("lorem ipsum");

Promise.all([promise1, promise2, promise3])
        .then( (values)=> {console.log(values)} )
        .catch( (err)=> {console.error(err.message)} );