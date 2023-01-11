const session = require("express-session");
const MongoStore = require("connect-mongo");

const sessionStore = new MongoStore({
  mongoUrl: process.env.MONGO_URL,
  collection: "sessions",
});

const ONE_DAY = 1000 * 60 * 60 * 24; // 1 day

const options = {
  resave: false,
  saveUninitialized: true,
  secret: process.env.SECRET,
  store: sessionStore,
  unset: "destroy",
  cookie: {
    httpOnly: true,
    maxAge: ONE_DAY,
    secure: process.env.NODE_ENV !== "development",
    sameSite: true
  },
};

if (process.env.NODE_ENV !== "development") {
  options.cookie.sameSite = "none";
}

module.exports = session(options);
