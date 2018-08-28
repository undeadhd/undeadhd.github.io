//71431 names
//318474 surnames
function testRandom() {
    let myHeaders = new Headers();
    let myInit = {
        method: 'GET',
        headers: myHeaders
    };

    fetch('russian_names.json', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(json => json.title)
    .then(title => document.getElementById("paragraph").innerHTML = title);

}