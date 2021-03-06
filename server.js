const express = require("express");
const app = express();
var bookRouter = require("./routes/book.route");
var userRouter = require("./routes/user.route");
var transactionRouter = require("./routes/transaction.route");


app.set("view engine", "pug");
app.set("books", "./views/books");
app.set("user", "./views/user");
app.set("transactions", "./views/transactions");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/route', bookRouter);
app.use('/users', userRouter);
app.use('/transaction', transactionRouter);


// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});