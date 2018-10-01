var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let users = (user) => {
    user.forEach( item => {
        console.log(item.name);
    });
};

const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = function(){
        this.status === 200 ? 
            resolve(JSON.parse(xhr.responseText)) :
            reject("wrong promise!");
    };
    xhr.send();
});

promise
    .then((resolved) => {
        console.log(['promise']);
        users(resolved);
    })
    .catch((err) => console.log(err));
