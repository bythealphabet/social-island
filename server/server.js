import app from "./express";
import mongoose from "mongoose";
import config from "../config/config";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    app.listen(config.port);
    console.log("Server is listening on PORT:", config.port);
  })
  .catch((err) => {
    console.log("Error Mongoose Connection:", err);
  });

// var webpack = require("webpack");
// var WebpackDevServer = require("webpack-dev-server");
// var config = require("./webpack.config");

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
// }).listen(3000, "localhost", function (err, result) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("Listening at http://localhost:3000/");
// });
