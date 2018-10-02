let promise = new Promise((resolve, reject) => {
    let value = 'success';
    /** tutaj to co się wykona pierwsze */
    resolve(value);
    reject(new Error('Something happened!'));

});

/**przypadke kiedy obslugujemy w then() jednocześnie resolve(), reject(),
 * tutaj możen na używać then().catch()
 */
promise.then(response => {
    console.log(response);
}, error => {
    console.log(error.message);
});

/**przypadek kiedy tylko obslugujemy reject() */
promise.then(
    null,
    error => {
        console.log(error.message);
    });
