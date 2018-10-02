var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url) {
    return promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://jsonplaceholder.typicode.com${url}`, true);
        xhr.addEventListener('load', () => resolve(JSON.parse(xhr.responseText)));
        xhr.addEventListener('error', () => reject(xhr.statusText));
        xhr.send();
    });
}

function displayPostBody(body) {
    console.log(["displayPostBody"], body);
}

function displayPostTitle(title) {
    console.log(["displayPostTitle"], title);
}

function getUserData() {
    console.log(['getUserData']);
    return httpGet('/users');
}

function getPost(user) {
    console.log(['getPost']);
    // console.log(user[0]);
    return httpGet("/posts/1");
}

function getTitle(user) {
    console.log(['getTitle']);
    // console.log(user[0]);
    return httpGet("/posts/1");
}

function displayPost(psot) {
    console.log(['displayPost']);
    displayPostBody(psot.body);
    throw new Error("bład tutaj"); // <---
}

function displayTitle(post) {
    console.log(['displayTitle']);
    displayPostTitle(post.title);
    throw new Error("bład tutaj"); // <---
}

function manageError(error) {
    console.log(['manageError']);
    console.log(error.message);
}

function getPostAndTitle(user) {
    console.log(['getPostAndTitle']);
    getPost(user)
        .then(displayPost)

    getTitle(user)
        .then(displayTitle);
}

/**01 error wylapany*/
// getUserData()
//     .then(getPost)
//     .then(displayPost)
//     .catch(manageError);

/**02 error zignorowany*/
getUserData()
    .then(getPostAndTitle)
    .catch(manageError);