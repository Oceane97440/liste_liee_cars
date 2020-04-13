var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require('./routes/indexRoute');
app.use('/',indexRouter);



app.set("port", process.env.PORT || 3000);



app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});