import Express from 'express';
import Task from './entities/Task.js';
import _ from 'lodash';


export default () => {
  const app = new Express();

  const tasks = [
    new Task(1, 'task 1'),
    new Task(2, 'task 2', 'finished'),
    // { id: 2, text: 'task 2', state: 'finished' },
    // { id: 1, text: 'task 1', state: 'active' }
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
    const taskState = state === 'activate' ? 'active' : 'finished';
    console.log(taskState);
    const data = tasks.find((task) => task.id === id);
    _.set(data, 'state', taskState);
    console.log(data);
    // console.log(tasks);
    res.json(data);
  });
 
  return app;
};

