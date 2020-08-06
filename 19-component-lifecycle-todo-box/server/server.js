import Express from 'express';
import Task from './entities/Task.js';
import _ from 'lodash';


export default () => {
  const app = new Express();

  const tasks = [
    new Task('asdf', 'finished'),
    new Task('asdasd'),
  ];

  /* for parsing application/json */
  app.use(Express.json())
  /* **** */

  // curl localhost:8080/tasks
  app.get('/tasks', (req, res) => { // получить список задач.
    res.json(tasks);
  });


  // Формат запроса - {"text": "new task"}
  // curl -XPOST -H 'Content-Type: application/json' --data '{"text": "new task"}' localhost:8080/tasks
  app.post('/tasks', (req, res) => { // создать новую задачу.
    const { text } = req.body;
    const newTask = new Task(text);
    tasks.push(newTask);
    res.json(newTask);
  });
  
  // curl -XPATCH "localhost:8080/tasks/:id/:state"
  app.patch('/tasks/:id/:state', (req, res) => { // переоткрыть завершенную задачу.
    const { id, state } = req.params;
    const data = tasks.find((task) => task.id === id);
    _.set(data, 'state', state);
    res.json(data);
  });
 
  return app;
};

