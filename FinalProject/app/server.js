const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const path = require("path");
const passport = require("passport");
const cors = require("cors");


/**
 * ========== GENERAL SETUP ==============
 */

dotenv.config({ path: "./config/config.env" });

const connectDB = require("./config/db");
connectDB();

const app = express();

/**
 * ========== CORS SETUP ==========
 */

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

/**
 * ========== SESSION SETUP && PASSPORT AUTHENTICATION ==========
 */

app.use(require("./config/session"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

/**
 * ========== ROUTES ==============
 */

const catalogRouter = require("./routes/catalog");
const usersRouter = require("./routes/user");
const authRouter = require("./routes/auth");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Body parser
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);
app.use("/user", usersRouter);
app.use("/", catalogRouter);

/**
 * ========== ERROR HANDLER ==============
 */

if (process.env.NODE_ENV === "develop") {
  app.use(logger("dev"));
}

app.use(function (req, res, next) {
  let error = new Error("Page not found");
  error.statusCode = 404;
  next(error);
});

const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);

/**
 * ========== SERVER ==============
 */

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log(
    `Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
