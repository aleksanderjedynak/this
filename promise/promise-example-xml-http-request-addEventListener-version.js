var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users', true);
    xhr.addEventListener('load', () => resolve(xhr.responseText));
    xhr.addEventListener('error', () => reject(xhr.statusText));
    xhr.send();
});

promise
    .then((resolved) => {
        console.log(['promise']);
        console.log(resolved)
    })
    .catch((err) => console.log(err));
