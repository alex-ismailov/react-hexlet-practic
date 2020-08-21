import React from 'react';
import NewTaskForm from './NewTaskForm.jsx';
import Panel from './Panel.jsx';
import Tasks from './Tasks.jsx';

const App = () => (
  <div className="col-5">
    <NewTaskForm />
    <Panel />
    <Tasks />
  </div>
);

export default App;
