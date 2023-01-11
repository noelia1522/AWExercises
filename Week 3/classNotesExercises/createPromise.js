let myPromise = new Promise(function(resolve, reject){

  let password = false;
  if(password){
    resolve("password is correct");
  }
  else
    reject("Error! Password is wrong!");

});

myPromise
.then((res) => console.log(res))
.catch((rej) => console.log(rej))
