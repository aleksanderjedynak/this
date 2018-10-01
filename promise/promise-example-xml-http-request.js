var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/**1 */
function getAsync(url) {
    return new Promise((resolve, reject) => {
        var httpReq = new XMLHttpRequest();
        httpReq.onreadystatechange = () => {
            if (httpReq.readyState === 4) {
                if (httpReq.status === 200) {
                    resolve(JSON.parse(httpReq.responseText));
                } else {
                    reject(new Error(httpReq.statusText));
                }
            }
        };
        httpReq.open("GET", url, true);
        httpReq.send();
    });
};

getAsync('https://jsonplaceholder.typicode.com/posts/2').then((data) => {
    console.log(["getAsync"]);
    console.log(['data=>'], data);
    const post = 'Title: ' + data.title + '\n\nBody: ' + data.body;
    console.log(post)
}).catch((err) => {
    console.log(['data=>'], data);
    console.log(err);
});
