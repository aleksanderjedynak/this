'use strict'
/**0 */
let array =[{name: "Ala" }, {name: "Kate"}, {name: "Alex"}];

let fetchArray = new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random()*2);

    rand ? resolve(array) : reject({ status: 'error', message: "UPS!!!"});
});

fetchArray.then(resolved).catch(rejected);
fetchArray.then(getAlex).then(resolved).catch(rejected);

function getAlex(response){ return response[2]; }

function resolved(response){ console.log(response) };

function rejected(reason){ console.log(reason) };

