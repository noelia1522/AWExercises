
// using 1. fetch(url).then().then() to work with fetch(url) OR 2.async, await
// //--------------------------------------------------------------------// //
// // 1. fetch(url).then().then()
// //--------------------------------------------------------------------// //


let url =" https://galaxy-explorer.vercel.app/api/clusters";

    fetch(url)
    // so ok = false
      .then(function (response) {
        if(response.ok){
          console.log("ok");
          return response.json();
        } else {
          //handle status other than 2xxx //promiss is really not resolevd! obliged the fetch to accept it
          return Promise.reject('something went wrong!')
        }
      })
      .then(function (data) {//data is array
        console.log(data);

        let myUl = document.createElement('ul');

          data.forEach(Item =>{
            let myLi = document.createElement('li');
            myLi.innerHTML = Item;
            myUl.append(myLi);
          });
        document.body.append(myUl);
      }
      )
      .catch( function (error) {//like the else step. catch th erro
        console.log('error ' + error);
      });

    function showElements(data)
    {
      let myUl = document.createElement('ul');

      data.forEach(Item =>{
            let myLi = document.createElement('li');
            myLi.innerHTML = Item;
            myUl.append(myLi);

          });

        document.body.append(myUl);
    }

    // // 2.async, await
   // //--------------------------------------------------------------------// //

    async function fetchClustersUsingAsynchAwait(params) {

      try{
        const response = await fetch(url);
        const data = await response.json();

        let myUl = document.createElement('ul');

          data.forEach(Item =>{
            let myLi = document.createElement('li');
            myLi.innerHTML = Item;
            myUl.append(myLi);
          });
        document.body.append(myUl);
      }
      catch(err){
        console.log("Error: ");
        console.log(err);
      }

    }
