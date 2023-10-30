const express = require("express");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

connectDb();
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/posts", postsRoutes);
app.use(errorHandler);
app.use(notFound);
app.use("/media", express.static(path.join(__dirname, "media")));
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
