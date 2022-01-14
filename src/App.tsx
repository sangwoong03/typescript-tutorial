import React from 'react';
import GithubProfileLoader from './Container/GithubProfileLoader';
import TodoApp from './Container/TodoApp';

const App: React.FC = () => {
  return(
    <>
      <TodoApp/>
      <GithubProfileLoader />
    </>
  )
}

export default App;
