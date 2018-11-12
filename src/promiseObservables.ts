let promiseConfig = function(resolve, reject){
  console.log("Creating Promise");

  setTimeout( () => {
    resolve("Dummy Data ")
  }, 2500);
}

let dummyPromise = new Promise(promiseConfig)





let apiPromimseConfig = function(resolve, reject){
  let endpointURL = "https://jsonplaceholder.typicode.com/users"
  fetch(endpointURL).then(users => resolve(users.json()));
}

let serverPromise = new Promise(apiPromimseConfig)






let promiseExports = {
  dummyPromise : dummyPromise,
  serverPromise : serverPromise,
}

export default promiseExports