//71431 names
//318474 surnames
function testRandom() {
    let myHeaders = new Headers();
    let myInit = {
        method: 'GET',
        headers: myHeaders
    };
    let req = new Request('http://jsonplaceholder.typicode.com/todos/2');

    let resp;
    fetch(req, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(json => json.title)
    .then(title => document.getElementById("paragraph").innerHTML = title);

    fetch("russian_names.json")
    .then(reponse => console.log(response));
    document.getElementById("namesFile");

}

function readNamesFile() {
    let text = file.result;
}

var app = new Vue({ 
    el: '#app',
    data: {
        message: 'привет'
    }
})