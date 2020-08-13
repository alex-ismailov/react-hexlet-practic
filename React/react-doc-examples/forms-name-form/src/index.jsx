import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './NameForm.jsx';
import EssayForm from './EssayForm.jsx';

function App() {
  return (
    <div>
      <NameForm />
      <EssayForm />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
