let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let routes = require('./routes/customerRoutes');

let app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/invoice-manager', {
    useNewUrlParser: true,
  })
  .catch(error => console.error(error));

mongoose.connection.on('error', error => {
  console.error(error);
});

var db = mongoose.connection;
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

app.get('/', (req, res) => res.send('Invoice Manager Api'));
app.use('/api', routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Running Invoice Manager Backend on port ' + port);
});
