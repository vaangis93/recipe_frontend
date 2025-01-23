

// const URL = "http://localhost:7070/api/v1"; // local 
const URL = "https://recipe.vaangis.dk/api/v1"; // deployed / production

function handleHttpErrors(res) {
if (!res.ok) { // If response status is not OK (200), throw an error
  return Promise.reject({ status: res.status, fullError: res.json() }) // Rejects the Promise with status:(gives us the status codes)
  //  and fullerror:(gives us a the object that gives us the body in json) details
}
return res.json();// Resolves with JSON data when the Promise is resolved
}




function apiFacade() {

   
const login = (username, password) => { 
    const options = makeOptions("POST", false, {username: username, password: password });
    return fetch(URL + "/auth/login", options)
        .then(handleHttpErrors)
        .then(data => {setToken(data.token) })
   
 }
 // all the "=" are default values. so if we dont write anything
const fetchData = (urlPath = '', callback = undefined, method = 'GET', addToken = false, body = '') => {
  const options = makeOptions(method, addToken, body);
  console.log("Request options:", options);

  return fetch(URL + urlPath, options)
    .then(handleHttpErrors) // calls our custom error handling function
    .then(data => {
      callback(data); // On success, call the callback with the data
    })
    .catch(error => {
      if (error.status === 401) { // 401 Unauthorized
        callback({ error: "YO You need to be an admin or talk to an adult." });
      } else { // If another error occurs, log the error to the console
        callback( console.log ("error: Something went wrong!") );
      }
    });
};



const makeOptions= (method,addToken,body) =>{
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      'Accept': 'application/json',
    }
  }
  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}


const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
    sessionStorage.setItem('jwtToken', token)// to show example of session storage
  }
const getToken = () => {
  return localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken'); // get from local storage OR session storage(as example)
}

// check if token is present in local storage or session storage
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}
const logout = () => {
  localStorage.removeItem("jwtToken");
  sessionStorage.removeItem("jwtToken");
}

return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData
}
}
const facade = apiFacade();
export default facade;
