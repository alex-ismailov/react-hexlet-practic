import Express from 'express';
import Task from './entities/Task.js';
import _ from 'lodash';


export default () => {
  const app = new Express();

  const tasks = [
    new Task(1003, 'asdf', 'finished'),
    new Task(1004, 'asdasd'),
  ];

  /* switch off CORS policy */
  /* https://qastack.ru/programming/23751914/how-can-i-set-response-header-on-express-js-assets */
  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, PATCH');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  /* **** */

  /* for parsing application/json */
  app.use(Express.json())
  /* **** */

  // curl localhost:8080/tasks
  app.get('/tasks', (req, res) => { // получить список задач.
    res.json(tasks);
  });


  // Формат запроса - {"text": "new task"}
  // curl -XPOST -H 'Content-Type: application/json' --data '{"text": "new task"}' localhost:8080/tasks/:id
  app.post('/tasks/:id', (req, res) => { // создать новую задачу.
    const { id } = req.params;
    const { text } = req.body;
    const newTask = new Task(id, text);
    tasks.push(newTask);
    res.json(newTask);
  });
  
  // curl -XPATCH "localhost:8080/tasks/:id/:state"
  app.patch('/tasks/:id/:state', (req, res) => { // переоткрыть завершенную задачу.
    const { id, state } = req.params;
    const data = tasks.find((task) => task.id === id);
    _.set(data, 'state', state);
    console.log(data);
    // console.log(tasks);
    res.json(data);
  });
 
  return app;
};

