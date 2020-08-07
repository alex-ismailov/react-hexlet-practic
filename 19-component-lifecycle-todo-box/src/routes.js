// const host = '';
const host = 'http://localhost:8080';
export default {
  tasksPath: () => [host, 'tasks'].join('/'),
  taskPath: (id) => [host, 'tasks', id].join('/'),
  finishTaskPath: (id) => [host, 'tasks', id, 'finish'].join('/'),
  activateTaskPath: (id) => [host, 'tasks', id, 'activate'].join('/'),
};
