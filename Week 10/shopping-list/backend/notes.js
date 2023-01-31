// 1. Quick review of the app
// app.js as the main file.
// routers
// controllers
//ejs files
// 2. add the index.html in the public folder
// add app.get('/', ..) in the app.js
// 2. use fetch in index page instead of ejs

//Going through slides- mongodb
//install mongoose: npm install mongoose
//install mongodb(side)/ mongosh(shell)- try mongosh as a client
//run the mongodb server

//connect to mongodb using mongoose
//add userModel into model folder
//export usermodel

//write createUser method and call it in the userController

/////////3shanbeh
//1
// .env file: npm install .env
// we also use this .env to set variales in production environment
//Development vs Production
//console.log(), nodemon, etc. => use just in development
//node, typescript, expres, => development and production

//2
//connecting to Atlas
// connect to application. copy the link
// make sure your IP is added (Network Access)
//set DB_SERVer = copied link
//add password
//remove &w=majority
//see the results in Atlas DB

//3
//set different constraints on fields
//validators/min/max/ required/unique/ etc


//4
//postgres
//instal pg
// Open simple-todo-postgres

// 4shanbe
//continue post gres
//introduce express method-override package to handle delete from form
//https://expressjs.com/en/resources/middleware/method-override.html

//Movies App
//APIs/ MongoDB Atlas movies databses
//volnurable dependencies error => npm edit fix force

// <!-- <% for (let i = 0; i < task.length; i++) { %> -->
//             <form method="POST" action="http://localhost:3000/tasks?_method=DELETE">
//               <!-- <li> -->
//                 <!-- <label for= <%= task[i] %> > Task: </label> -->
//                 <!-- <input type= text name ="task" id= <%=task[i] %>  value= <%=task[i].title %> /> -->
//               <!-- <%= task[i].title %> -->
//               <input type=text name="task" id="mytasks" value= "hellotask" />
//               <button type="submit">Delete task</button>
//               <!-- </li> -->
//             </form>
//           <!-- <%}%> -->
