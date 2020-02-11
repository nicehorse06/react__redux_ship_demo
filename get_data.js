url = 'https://nicehorse06.github.io/test_ship_data/data.json'

export default (url) => {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.responseText);
                // 也可以用 req.response
                // 差別參閱：https://stackoverflow.com/questions/46751610/whats-the-difference-bertween-xhr-response-and-xhr-responsetext-in-xmlhttpreque
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}