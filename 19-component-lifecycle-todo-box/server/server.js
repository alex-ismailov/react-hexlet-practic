import Express from 'express';
import Task from './entities/Task.js';
import _ from 'lodash';


export default () => {
  const app = new Express();

  const tasks = [
    new Task(_.uniqueId(), 'task 1'),
    new Task(_.uniqueId(), 'task 2', 'finished'),
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
  app.post('/tasks/', (req, res) => { // создать новую задачу.
    const { text } = req.body;
    const newTask = new Task(_.uniqueId(), text);
    tasks.push(newTask);
    res.json(newTask);
  });

  app.post('/tasks/:id', (req, res) => { // Потому что CRUD
    // TODO
    // В данном упражнении маршрут taskPath (taskPath: (id) => [host, 'tasks', id].join('/')) никак не используется. 
    // А вообще такой маршрут является частью реализации соглашения CRUD и может быть использован для:
    // GET /tasks/10 # просмотр задачи
    // PATCH /tasks/10 # обновление задачи
    // DELETE /tasks/10 # удаление задачи
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

