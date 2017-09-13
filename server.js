var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const cors = require ('cors');
var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

//View Engine
/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
*/

app.use(express.static(path.join(__dirname, 'views')));

//Send all other requests to the Angular app
/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());


app.use('/', index);
app.use('/api/v1', todos);

app.listen(3000, function(){
	console.log('Server started on port 3000....');
});