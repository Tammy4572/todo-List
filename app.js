const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const application = express();
 
application.engine('mustache', mustacheExpress());
application.set('views', './views');
application.set('view engine', 'mustache');

application.use(bodyParser.json());
application.use(bodyParser.urlencoded());

application.use(expressValidator());


var toDoList = {
  incomplete : ['Wash the Dog'],
  complete : []
};

application.use(express.static(__dirname+ '/public'));

application.get('/', (request, response) => {
  response.render('todo', toDoList);
});

application.post('/', (request,response) => {
  toDoList.incomplete.push(request.body.listItemAdd);
  response.render('todo', toDoList);
});

application.post('/:item', (request,response) => {
  var item = toDoList.incomplete.find(item => {return toDoList.incomplete});
  var itemIndex = toDoList.incomplete.find(itemIndex => {return toDoList.incomplete.indexOf(itemIndex)});
  toDoList.incomplete.splice(item, 1);
  toDoList.complete.push(item);

  response.render('todo', toDoList);
});

application.listen(3000);