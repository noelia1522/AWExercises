## API controller methods

### Login method
Login will simply return status 401 - Unauthorized when authentication fails for whatever reason, and status 200 - OK when it's successful.
Additionally you can return a JSON response with the user's information.

```javascript
// @access Public
exports.login = (req, res, next) => {
  passport.authenticate("local", function (err, user) {
    if (err || !user) {
      res.status(401).send("Unauthorized");
    } else {
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        res.status(200).json({
          email: user.email,
          name: user.name,
        });
      });
    }
  })(req, res, next);
};
```

### Logout method

Logout will simply return status 200 OK

```javascript
// @access Public
exports.logout = (req, res) => {
  req.logout();
  res.clearCookie("connect.sid", { path: "/" });
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).send();
  });
};
```

### Register method

Same as with login, a successful register should return status 200 - OK and include the same JSON response.

```javascript
// @access Public
exports.register = async (req, res, next) => {
  
  const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({
        message: `Email <${req.body.email}> already taken`,
      });
    } else {
    
     try { 
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newuser = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        });
           res.status(200).json({
              email: newuser.email,
              name: newuser.name,
           });
     }catch(error) {
        console.log(error)
        next(error);
    }
  };
};
```

## Configure `express-session`

We need to tweak `express-session` configuration to be able to store user sessions in the browser's cookies after a successful login. Otherwise, authenticated API routes will not work. We also need to install and use connect-mongo module, to store the session info in our mongodb.

```javascript

const MongoStore = require("connect-mongo");

const sessionStore = new MongoStore({
  mongoUrl: process.env.MONGO_URL,
  collection: "sessions",
});

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  unset: "destroy",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: true,
    secure: false   //change to true if on deployment (eg Heroku)
  },
}));
```

## Configure CORS

If you haven't done so yet, add the `cors` dependency to your node project.

```
npm install cors
```

Then use it in the main file, where the Express server is instantiated and started.

```javascript
const cors = require("cors");

[...]

// ********* CORS SETUP *************
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    next();
  });
  
  app.use(
    cors({
      credentials: true,
      allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
    })
  );
  app.set("trust proxy", 1);
// ********* CORS SETUP *************
```