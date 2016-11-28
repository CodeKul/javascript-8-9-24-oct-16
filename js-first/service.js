var Service = (() => {
    return {
        produceRandomJoke: (resultFun) => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log('Response - ' + xhttp.responseText);
                    resultFun(JSON.parse(xhttp.responseText));
                }
            };
            xhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
            xhttp.send();
        }
    };
})();