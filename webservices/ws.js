var wsModule = (function (doc) {

    // http methods
    // GET - get something from server
    // POST - to the server
    // PUT - update on the server
    // DELETE - from server

    // http status
    //2** - success
    //3** - redirection
    //4** - bad request
    //5** - internal server error

    return {
        randomJokes: () => {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log('Response - ' + xhttp.responseText);
                    doc.getElementById('divJoke').innerHTML = xhttp.responseText;
                }
            };
            xhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
            xhttp.send();
        }
    };
})(document);